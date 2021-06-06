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

  private async request(method: string, url:string, data?:any, responseType?:any){
    
    console.log('request' + JSON.stringify(data));
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

  getPlanFijoAll(){
    return this.request('get', `${baseUrl}/planfijo`);
  }

  getPlanFijobyId(id:string){
    return this.request('get', `${baseUrl}/planfijo/${id}`);
  }

  createPlanFijo( planFijo:PlanFijo ){
    console.log('createPlanfijo' + JSON.stringify(planFijo));
    return this.request('post', `${baseUrl}/planfijo`, planFijo);
  }

  deleteAgenteVentas( id:string ){
    return this.request('delete', `${baseUrl}/planfijo/${id}`, null, 'text');
  }

}
