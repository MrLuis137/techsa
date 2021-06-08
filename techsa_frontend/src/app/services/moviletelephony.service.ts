import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlanMovil } from '../models/PlanMovil';

//Ruta del backend
const baseUrl = "http://localhost:4201"

@Injectable({
  providedIn: 'root'
})
export class MovileTelephonyService {

  constructor(private http:HttpClient) { }

  //Crea el request al backend
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

  //Retorna todos los planes móviles en la base de datos
  async getPlanMovilAll(){
    return this.request('get',`${baseUrl}/planmovil`)
  }

  //Retorna una lista de planes moviles de cierto tipo, prepago o postpago 
  async getPlanMovilByIdAll(id:string){
    return await this.request('get', `${baseUrl}/planmovilTipoPlan/${id}`)
  }

  //Retorna el plan móvil correspondiente al id 
  async getPlanMovilById(id:string){
    return await this.request('get', `${baseUrl}/planmovil/${id}`)
  }

  //Guarda un plan móvil en la base de datos. 
  async createPlanMovil( PlanMovil:PlanMovil ){
    console.log('mobilephone' + JSON.stringify(PlanMovil));
    return await this.request('post', `${baseUrl}/planmovil`, PlanMovil, 'text');
  }

  async deletePlanMovil( id:string ){
    return await this.request('delete', `${baseUrl}/planmovil/${id}`, null, 'text');
  }

  async updatePlanMovil(id:string, planMovil:PlanMovil){
    console.log("servicio mobilephone ")
    return await this.request('put', `${baseUrl}/planmovil/${id}`, planMovil,'text');
  }
}
