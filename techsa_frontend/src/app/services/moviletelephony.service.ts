import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlanMovil } from '../models/PlanMovil';

const baseUrl = "http://localhost:4201"


@Injectable({
  providedIn: 'root'
})
export class MovileTelephonyService {

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

  getMobilePlans(){
    return this.request('get',`${baseUrl}/planmovil`)

  }
}
