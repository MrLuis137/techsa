import { Injectable } from '@angular/core';
import { Servicio } from '../models/Servicio';
import { Dispositivo } from '../models/Dispositivo';
import { HttpClient } from '@angular/common/http';


const baseUrl = "http://localhost:4201"

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

  //Hace el request al backend
  private async request(method: string, url:string, data?:any, responseType?:any){
    
    console.log('request' + JSON.stringify(data));
    const result = this.http.request(method, url, {
      body: data,
      responseType: responseType || 'json',
      observe: 'body',
      headers: {}
    });
    return new Promise<any>((resolve,reject) =>{
      result.subscribe(resolve as any, reject as any);
    });
  }
  
  async getDispositivosByUserId(id:string){
    try {
      return await this.request('get', `${baseUrl}/carrito/dispositivos/${id}`);
    } catch (err) {
      return false;
    }
  }

  async getServiciosByUserId(id:string){
    try {
      return await this.request('get', `${baseUrl}/carrito/servicios/${id}`);
    } catch (err) {
      return false;
    }
  }
  async setServicioByUserId(idUsuario:String, idServicio){
    try {
      return await this.request('put', `${baseUrl}/carrito/servicios/${idUsuario}`, {servicio: idServicio});
    } catch (err) {
      return false;
    }
  }

  async getServicesByServiceID(id:String){
    try {
      return await this.request('get',`${baseUrl}/servicio/${id}`) 
    } catch (err) {
      return false;
    }
  }

  async setDispositivoByUserId(idUsuario:String, idDispositivo){
    try {
      return await this.request('put', `${baseUrl}/carrito/dispositivos/${idUsuario}`, {dispositivo: idDispositivo});
    } catch (err) {
      return false;
    }
  }
}