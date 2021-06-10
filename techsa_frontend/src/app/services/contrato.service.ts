import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contrato } from '../models/Contrato';

const baseUrl = "http://localhost:4201"

@Injectable({
  providedIn: 'root'
})
export class ContratoService {

  constructor(private http:HttpClient) { }

  private async request(method: string, url:string, data?:any, responseType?:any){
      
    //console.log('request' + JSON.stringify(data));
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

  //Toma los contratos en los que un cliente está moroso
  async getAllContratosPendientesByIdCliente(idCliente:number){
    var services=[]
    services = (await this.request('put',`${baseUrl}/pagoEnLinea/plan_internet/${idCliente}`,{"Estado":false})).concat(services);
    services = (await this.request('put',`${baseUrl}/pagoEnLinea/plan_internet_plan_movil_plan_fijo/${idCliente}`,{"Estado":false})).concat(services);
    services = (await this.request('put',`${baseUrl}/pagoEnLinea/plan_fijo/${idCliente}`,{"Estado":false})).concat(services);
    services = (await this.request('put',`${baseUrl}/pagoEnLinea/plan_internet_plan_fijo/${idCliente}`,{"Estado":false})).concat(services);
    services = (await this.request('put',`${baseUrl}/pagoEnLinea/plan_movil/${idCliente}`,{"Estado":false})).concat(services);
    services = (await this.request('put',`${baseUrl}/pagoEnLinea/plan_movil_dispositivo/${idCliente}`,{"Estado":false})).concat(services);
    
    console.log(services)
    return services
    
  }
  //Toma todos los contratos de un cliente
  async getAllContratosByIdCliente(idCliente:number){
    var services=[]
    services = (await (this.getAllContratosPendientesByIdCliente(idCliente))).concat(services)
    services = (await this.request('put',`${baseUrl}/pagoEnLinea/plan_internet/${idCliente}`,{"Estado":true})).concat(services);
    services = (await this.request('put',`${baseUrl}/pagoEnLinea/plan_internet_plan_movil_plan_fijo/${idCliente}`,{"Estado":true})).concat(services);
    services = (await this.request('put',`${baseUrl}/pagoEnLinea/plan_fijo/${idCliente}`,{"Estado":true})).concat(services);
    services = (await this.request('put',`${baseUrl}/pagoEnLinea/plan_internet_plan_fijo/${idCliente}`,{"Estado":true})).concat(services);
    services = (await this.request('put',`${baseUrl}/pagoEnLinea/plan_movil/${idCliente}`,{"Estado":true})).concat(services);
    services = (await this.request('put',`${baseUrl}/pagoEnLinea/plan_movil_dispositivo/${idCliente}`,{"Estado":true})).concat(services);
    
    console.log(services)
    return services
    
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

}
