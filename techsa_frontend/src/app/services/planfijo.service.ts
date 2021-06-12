import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlanFijo } from '../models/PlanFijo';
import { async } from '@angular/core/testing';

const baseUrl = "http://localhost:4201"

@Injectable({
  providedIn: 'root'
})
export class PlanfijoService {

  constructor(private http:HttpClient) { }

  //Crea el request al backend
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

  //GetPlanFijoAll
  //Le dice al backend que le envíe la lista de planes fijos 
  //Retorna false si hay algún problema en el request
  async getPlanFijoAll(){
      return await this.request('get', `${baseUrl}/planfijo`);

  }

  //getPlanFijobyId
  //Solicita al back end que retorne un plan fijo, buscandolo por el id
  //Retorna false si hay algún problema en el request
  async getPlanFijobyId(id:string){
    return this.request('get', `${baseUrl}/planfijo/${id}`);
  }

  //createPlanFijo
  //Envía el cliente un nuevo plan fijo 
  //Retorna 
  createPlanFijo( planFijo:PlanFijo ){
    console.log('createPlanfijo' + JSON.stringify(planFijo));
    return this.request('post', `${baseUrl}/planfijo`, planFijo);
  }

  //deletePlanFijo
  //solicita al backend que elimine un plan fijo, buscandolo por el id
  //Retorna 
  deletePlanFijo( id:string ){
    return this.request('delete', `${baseUrl}/planfijo/${id}`, null, 'text');
  }


  //updatePlanFijo
  //Envía al backend un producto y le pide que lo actualice en la base de datos 
  //Retorna 
  updatePlanFijo(id:string, planFijo:PlanFijo){
    console.log("servicio updateLandlineService ")
    return this.request('put', `${baseUrl}/planfijo/${id}`, planFijo,'text');
  }

}
