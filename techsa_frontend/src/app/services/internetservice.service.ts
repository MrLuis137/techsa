import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PlanInternet } from '../models/PlanInternet';
import { PlanInternetPlanFijo } from '../models/PlanInternetPlanFijo';
import { PlanInternetPlanMovilPlanFijo } from '../models/PlanInternetPlanMovilPlanFijo';

const baseUrl = "http://localhost:4201"


@Injectable({
  providedIn: 'root'
})
export class InternetserviceService {

  constructor(private http:HttpClient) { }

  //request
  //Envia un request al backend
  private async request(method: string, url:string, data?:any, responseType?:any){
  
    //console.log('request' + JSON.stringify(data));
    const result = this.http.request(method,url,{   //Escribe el body 
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


    /////////////////////////////////// Plan Internet ///////////////////////////////////
  //getPlanInternetAll
  //Le dice al backend que le envíe la lista de planes de internet 
  //Retorna false si hay algún problema en el request
  async getPlanInternetAll(){
    return this.request('get',`${baseUrl}/planinternet`);
  }

  //getPlanInternet_idInternet
  //Solicita al back end que retorne un plan internet, buscandolo por el id
  //Retorna false si hay algún problema en el request
  async getPlanInternet_idInternet(id:string){
    return this.request('get',`${baseUrl}/planinternet/${id}`);
  }

  //createPlanInternet
  //Envía el cliente un nuevo plan internet 
  //Retorna 
  createPlanInternet( planInternet:PlanInternet ){
    console.log('createinternetService' + JSON.stringify(planInternet));
    return this.request('post', `${baseUrl}/planinternet`, planInternet, 'text');
  }

  //deletePlanInternet
  //solicita al backend que elimine un plan internet, buscandolo por el id
  //Retorna 
  deletePlanInternet( id:string ){
    return this.request('delete', `${baseUrl}/planinternet/${id}`, null, 'text');
  }

  //updatePlanInternet
  //Envía al backend un plan internet y le pide que lo actualice en la base de datos 
  //Retorna 
  updatePlanInternet(id:string, planInternet:PlanInternet){
    console.log("servicio updateinternetService ")
    return this.request('put', `${baseUrl}/planinternet/${id}`, planInternet,'text');
  }

  //getPlanInternet_IdServicio
  //Le dice al backend que le envíe la lista de planes de internet con un idServicio especifico 
  //Retorna false si hay algún problema en el request
  async getPlanInternet_IdServicio(id:string){
    return this.request('get',`${baseUrl}/servicio/planinternet/${id}`);
  }

  /////////////////////////////////// Plan Internet Plan Fijo//////////////////////////
  //getPlanInternetAll
  //Le dice al backend que le envíe la lista de planes de internet + fijo 
  //Retorna false si hay algún problema en el request
  async getPlanInternetFijoAll(){
    return this.request('get',`${baseUrl}/planinternetfijo`);
  }
  
  
  //getPlanInternetFijo_IdInternet
  //Busca los planes fijos asociados a un plan de internet especifico
  //Retorna false si hay algún problema en el request
  async getPlanInternetFijo_IdInternet(id:string){
    return this.request('get',`${baseUrl}/planinternetfijoallid/${id}`);
  }


  /////////////////////////////////// Plan Internet Plan Fijo Plan Movil///////////////
  //getPlanInternetFijoMovilAll
  //Le dice al backend que le envíe la lista de planes de internet + fijo  + movil
  //Retorna false si hay algún problema en el request
  async getPlanInternetFijoMovilAll(){
    return this.request('get',`${baseUrl}/planinternetfijomovil`);
  }


}
