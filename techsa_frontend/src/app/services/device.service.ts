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
  async getDispositivobyId(id:string){
    try {
      return await this.request('get', `${baseUrl}/dispositivo/${id}`);
    } catch (err) {
      return false;
    }
  }

  //createDispositivo
  //Envía el cliente un nuevo dispositivo
  //Retorna 
  async createDispositivo( dispositivo:Dispositivo ){
    console.log('createDispositivo' + JSON.stringify(dispositivo));
    try {
      return await this.request('post', `${baseUrl}/dispositivo`, dispositivo);
    } catch (err) {
      return false;
    }
  }

  //deleteDispositivo
  //solicita al backend que elimine un dispositivo, buscandolo por el id
  //Retorna 
  async deleteDispositivo( id:string ){
    try {
      return await this.request('delete', `${baseUrl}/dispositivo/${id}`, null, 'text');
    } catch (err) {
      return false;
    }
  }

  //updateDispositivo
  //Envía al backend un dispositivo y le pide que lo actualice en la base de datos 
  //Retorna 
  async updateDispositivo(id:string, dispositivo:Dispositivo){
    try {
      return await this.request('put', `${baseUrl}/dispositivo/${id}`, dispositivo,'text');
    } catch (err) {
      return false;
    }
  }

}