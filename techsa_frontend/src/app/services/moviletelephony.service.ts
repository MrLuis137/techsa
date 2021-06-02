import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlanMovil } from '../models/PlanMovil';
import { async } from '@angular/core/testing';
import { Request } from 'express';

const baseUrl = "http://localhost:3000"


@Injectable({
  providedIn: 'root'
})
export class MovileTelephonyService {

  constructor(private http:HttpClient) { }

  private async request(method: string, url:string, data?:any){
    
    console.log('request' + JSON.stringify(data));
    console.log(data);
    const result = this.http.request(method,url,{
      body:data,
      responseType:'json',
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
