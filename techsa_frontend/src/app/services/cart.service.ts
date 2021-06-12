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
  getDispositivosByUserId(id:string){
    return this.request('get', `${baseUrl}/carrito/dispositivos/${id}`);
  }


  getServiciosByUserId(id:string){
    return this.request('get', `${baseUrl}/carrito/servicios/${id}`);
  }
  setServicioByUserId(idUsuario:String, idServicio){
    return this.request('put', `${baseUrl}/carrito/servicios/${idUsuario}`, {servicio: idServicio});
  }

  getServicesByServiceID(id:String){
    return this.request('get',`${baseUrl}/servicio/${id}`) 
  }

  setDispositivoByUserId(idUsuario:String, idDispositivo){
    return this.request('put', `${baseUrl}/carrito/dispositivos/${idUsuario}`, {dispositivo: idDispositivo});
  }
}