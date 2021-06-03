import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgenteVentas } from '../models/AgenteVentas';

const baseUrl = "http://localhost:4201"

@Injectable({
  providedIn: 'root'
})
export class AgenteVentasService {

  constructor(private http:HttpClient) { }

  //Hace el request al backend
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

  getAgenteVentasAll(){
    return this.request('get', `${baseUrl}/agenteventas`);
  }

  getAgenteVentasbyId(id:string){
    return this.request('get', `${baseUrl}/agenteventas/${id}`);
  }

  createAgenteVentas( agenteVentas:AgenteVentas ){
    console.log('createAgenteVentas' + JSON.stringify(agenteVentas));
    return this.request('post', `${baseUrl}/agenteventas`, agenteVentas);
  }

  deleteAgenteVentas( id:string ){
    return this.request('delete', `${baseUrl}/agenteventas/${id}`, null, 'text');
  }
}