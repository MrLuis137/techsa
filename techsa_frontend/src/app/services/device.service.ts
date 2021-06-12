import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dispositivo } from '../models/Dispositivo';


const baseUrl = "http://localhost:4201"

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private http:HttpClient) { }
//Hace el request al backend
  private async request(method: string, url:string, data?:any, responseType?:any){
      
    //console.log('request' + JSON.stringify(data));
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

  //getDispositivoAll
  //Le dice al backend que le envíe la lista de dispositivos 
  //Retorna false si hay algún problema en el request
  async getDispositivoAll(){
    try {
      return await this.request('get', `${baseUrl}/dispositivo`);
    } catch (error) {
      return false;
    } 
  }

  //getDispositivobyId
  //Solicita al back end que retorne un dispositivo, buscandolo por el id
  //Retorna false si hay algún problema en el request
  getDispositivobyId(id:string){
    return this.request('get', `${baseUrl}/dispositivo/${id}`);
  }

  //createDispositivo
  //Envía el cliente un nuevo dispositivo
  //Retorna 
  createDispositivo( dispositivo:Dispositivo ){
    console.log('createDispositivo' + JSON.stringify(dispositivo));
    return this.request('post', `${baseUrl}/dispositivo`, dispositivo);
  }

  //deleteDispositivo
  //solicita al backend que elimine un dispositivo, buscandolo por el id
  //Retorna 
  deleteDispositivo( id:string ){
    return this.request('delete', `${baseUrl}/dispositivo/${id}`, null, 'text');
  }

  //updateDispositivo
  //Envía al backend un dispositivo y le pide que lo actualice en la base de datos 
  //Retorna 
  updateDispositivo(id:string, dispositivo:Dispositivo){
    return this.request('put', `${baseUrl}/dispositivo/${id}`, dispositivo,'text');
  }

}