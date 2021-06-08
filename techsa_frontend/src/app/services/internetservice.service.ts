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

    //Crea el request 
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
    //Get Todos los planes de Internet
    async getPlanInternetAll(){
      return this.request('get',`${baseUrl}/planinternet`);
    }

    //Busca los planes fijos asociados a un plan de internet 
    async getPlanInternet_idInternet(id:string){
      return this.request('get',`${baseUrl}/planinternet/${id}`);
    }

    

    /////////////////////////////////// Plan Internet Plan Fijo//////////////////////////
    //Get todos los planes con plan fijo
    async getPlanInternetFijoAll(){
      return this.request('get',`${baseUrl}/planinternetfijo`);
    }
    
    //Busca los planes fijos asociados a un plan de internet 
    async getPlanInternetFijo_IdInternet(id:string){
      return this.request('get',`${baseUrl}/planinternetfijoallid/${id}`);
    }

    /////////////////////////////////// Plan Internet Plan Fijo Plan Movil///////////////

    async getPlanInternetFijoMovilAll(){
      return this.request('get',`${baseUrl}/planinternetfijomovil`);
    }

    //Busca los planes moviles y fijos asociados a un plan de internet 
    async getPlanInternetFijoMovil_IdInternet(id:string){
      return this.request('get',`${baseUrl}/planinternetfijomovilallid/${id}`);
    }

}
