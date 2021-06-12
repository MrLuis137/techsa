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

  async getAgenteVentasAll(){
    try {
      return await this.request('get', `${baseUrl}/agenteventas`);
    } catch (err) {
      return false;
    }
  }

  async getAgenteVentasbyId(id:string){
    try {
      return await this.request('get', `${baseUrl}/agenteventas/${id}`);
    } catch (err) {
      return false;
    }
  }

  createAgenteVentas( agenteVentas:AgenteVentas ){
    console.log('createAgenteVentas' + JSON.stringify(agenteVentas));
    try {
      return this.request('post', `${baseUrl}/agenteventas`, agenteVentas);
    } catch (err) {
      return false;
    }
  }

  deleteAgenteVentas( id:string ){
    try {
      return this.request('delete', `${baseUrl}/agenteventas/${id}`, null, 'text');
    } catch (err) {
      return false;
    }
  }

  updateGerente(id:string, agenteVentas:AgenteVentas){
    console.log("servicio updateAgente de Ventas")
    try {
      return this.request('put', `${baseUrl}/agenteventas/${id}`, agenteVentas,'text');
    } catch (err) {
      return false;
    }
  }
}
