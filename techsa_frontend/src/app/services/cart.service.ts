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
  //Obtiene de la base de datos los dispositovos en el carrito
  async getDispositivosByUserId(id:string){
    return await this.request('get', `${baseUrl}/carrito/dispositivos/${id}`);
  }

  //Obtoene de la base de datos los servicios en el carrito
  async getServiciosByUserId(id:string){
    return await this.request('get', `${baseUrl}/carrito/servicios/${id}`);
  }

  //Agrega un servicio al carrito en la base de datos
  async setServicioByUserId(idUsuario:String, idServicio){
    return await this.request('put', `${baseUrl}/carrito/servicios/${idUsuario}`, {servicio: idServicio});
  }
  
  //Obtiene los deatos de un servicio por su ID
  async getServicesByServiceID(id:String){
    return await this.request('get',`${baseUrl}/servicio/${id}`) 
  }

  //Agrega un dispositivo al carrito en la base de datos
  async setDispositivoByUserId(idUsuario:String, idDispositivo){
    return await this.request('put', `${baseUrl}/carrito/dispositivos/${idUsuario}`, {dispositivo: idDispositivo});
  }
}