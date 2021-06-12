import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contrato } from '../models/Contrato';
import { PlanfijoService } from './planfijo.service';
import { InternetserviceService } from 'src/app/services/internetservice.service';
import { MovileTelephonyService } from './moviletelephony.service';
import { MobiledeviceService } from './mobiledevice.service';


const baseUrl = "http://localhost:4201"

@Injectable({
  providedIn: 'root'
})
export class ContratoService {

  constructor(
    private http:HttpClient,
    private internetService:InternetserviceService,
    private planFijoService:PlanfijoService,
    private mobileService: MovileTelephonyService,
    private  mobileDeviceService: MobiledeviceService ) { }

  private async request(method: string, url:string, data?:any, responseType?:any){

    const result = this.http.request(method,url,{
      body:data,
      responseType:responseType || 'json',
      observe:'body',
      headers:{
      }
    });
    return new Promise<any>((resolve,reject) =>{
      result.subscribe(resolve as any, reject as any);
    });
  }

  async newContrato(services, devices, PlanList, total){ 
    console.log("Hola");
    let resumen = ""
    console.log( PlanList)
    for (let i = 0; i <  PlanList.length; i++){
      let res = (await this.request('put',`${baseUrl}/contrato/`,{IdServicio:services[i].Id,IdCliente: '2201'}));
      res =  (await this.request('get',`${baseUrl}/servicio/${services[i].Id}`));
      console.log(PlanList[i].PrecioMensual)
      resumen += `${PlanList[i].Nombre} costo: ${PlanList[i].PrecioMensual}\n`
    }
    for (let i = 0; i <  devices.length; i++){
      console.log(devices[i])
      resumen += `${devices[i].modelo} costo: ${devices[i].Precio }`
    }
    resumen += `Total: ${total}`
    console.log(resumen)
    //(await this.request('post',`${baseUrl}/factura/`,  resumen ));

  }

  //Toma los contratos en los que un cliente está moroso
  async getAllContratosPendientesByIdCliente(idCliente:number){
    var services=[]
    services = (await this.request('put',`${baseUrl}/pagoEnLinea/plan_internet/${idCliente}`,{"Estado":false})).concat(services);
    services = (await this.request('put',`${baseUrl}/pagoEnLinea/plan_internet_plan_movil_plan_fijo/${idCliente}`,{"Estado":false})).concat(services);
    services = (await this.request('put',`${baseUrl}/pagoEnLinea/plan_fijo/${idCliente}`,{"Estado":false})).concat(services);
    services = (await this.request('put',`${baseUrl}/pagoEnLinea/plan_internet_plan_fijo/${idCliente}`,{"Estado":false})).concat(services);
    services = (await this.request('put',`${baseUrl}/pagoEnLinea/plan_movil/${idCliente}`,{"Estado":false})).concat(services);
    services = (await this.request('put',`${baseUrl}/pagoEnLinea/plan_movil_dispositivo/${idCliente}`,{"Estado":false})).concat(services);
    
    return services
  }

  //Toma todos los contratos de un cliente
  async getAllContratosByIdCliente(idCliente:number){
    var services=[]
    services = (await this.request('put',`${baseUrl}/pagoEnLinea/plan_internet_plan_movil_plan_fijo/${idCliente}`,{"Estado":true})).concat(services);
    services = (await this.request('put',`${baseUrl}/pagoEnLinea/plan_internet_plan_fijo/${idCliente}`,{"Estado":true})).concat(services);
    services = (await this.request('put',`${baseUrl}/pagoEnLinea/plan_movil_dispositivo/${idCliente}`,{"Estado":true})).concat(services);
    services = (await this.request('put',`${baseUrl}/pagoEnLinea/plan_movil/${idCliente}`,{"Estado":true})).concat(services);
    services = (await this.request('put',`${baseUrl}/pagoEnLinea/plan_fijo/${idCliente}`,{"Estado":true})).concat(services);
    services = (await this.request('put',`${baseUrl}/pagoEnLinea/plan_internet/${idCliente}`,{"Estado":true})).concat(services);
    services = (await (this.getAllContratosPendientesByIdCliente(idCliente))).concat(services)
    
    return services
  }
   
  //Get de todos los planes del mismo tipo del relacionado a ese id de contrato
  //Los trae "bonitos" (Los que son de planes combinados)
  async getPlanesTipo(idContrato:number){
    let options=[]
    const tipo = await this.request('get', `${baseUrl}/pagoEnLinea/todosTipoPlanes/${idContrato}`);
    switch(tipo[0].Nombre) {
      case 'PlanFijo':
        options = await this.planFijoService.getPlanFijoAll();
        break;
      case 'PlanInternetPlanFijo':
        options = await this.request('get', `${baseUrl}/pagoEnLinea/plan_internet_plan_fijo`);
        break;
      case 'PlanInternetPlanMovilPlanFijo':
        options  = await this.request('get', `${baseUrl}/pagoEnLinea/plan_internet_plan_movil_plan_fijo`);
        break;
      case 'PlanMovilDispositivo':
        options = await this.request('get', `${baseUrl}/pagoEnLinea/plan_movil_dispositivo`);
        break;
      case 'Prepago':
        options = await this.mobileService.getPlanMovilByIdAll('Prepago');
        break;
      case 'PostPago':
        options = await this.mobileService.getPlanMovilByIdAll('Postpago');
        break;
      default:
        options = await this.internetService.getPlanInternetAll();
    }
    return options
  }

  //Hace un pago a un contrato por id
  async pay(idContrato){
    return await this.request('put', `${baseUrl}/pagoEnLinea/pagar/${idContrato}`);
  }

  //Eliminar un contrado por id y si ya esta pagado
  async delete(idContrato){
    const contra=await this.request('get', `${baseUrl}/pagoEnLinea/get/${idContrato}`);
    if (contra && contra.Estado==1){
      await this.request('delete', `${baseUrl}/pagoEnLinea/cancelar/${idContrato}`);
      return 'OK'
    }
    else{
      return 'Debe paga el servicio antes de cancelarlo'
    }
    
  }
  
  async actualizarContrato(idContrato:number,idservicioid:number){
    await this.request('put', `${baseUrl}/pagoEnLinea/actualizar/${idContrato}`,{"idservicioid":idservicioid});
  }

  async isMoroso(idContrato:number){
    const a=await this.request('get', `${baseUrl}/pagoEnLinea/isMoroso/${idContrato}`);
    return a;
  }

}
