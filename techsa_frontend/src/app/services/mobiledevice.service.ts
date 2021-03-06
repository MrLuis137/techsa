import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlanMovilDispositivo } from '../../../../techsa_backend/src/entity/PlanMovilDispositivo';

const baseUrl = "http://localhost:4201"

@Injectable({
  providedIn: 'root'
})
export class MobiledeviceService {

  constructor(private http:HttpClient) { }

  //Crea el request 
  private async request(method: string, url:string, data?:any, responseType?:any){
    
    console.log('request' + JSON.stringify(data));
    const result = this.http.request(method,url,{   //Escribe el body 
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

  //Retorna todos los planes móviles + dispositivo de la base de datos 
  async getPlanMovilDispositivoAll(){
    return this.request('get',`${baseUrl}/planmovildispositivo`);
  }

  //Busca el plan móvil + dispositivo por id 
  async getPlanMovilDispositivobyId(id:string){
    return this.request('get',`${baseUrl}/planmovildispositivo/${id}`);
  }
}
