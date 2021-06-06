import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gerente } from '.././models/Gerente';


const baseUrl = "http://localhost:4201"

@Injectable({
  providedIn: 'root'
})
export class GerenteService {

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

  async getGerenteAll(){
    return this.request('get', `${baseUrl}/gerente`);
  }

  async getGerentebyId(id:string){
    return await this.request('get', `${baseUrl}/gerente/${id}`)
  }

  async createGerente( gerente:Gerente ){
    console.log('createAgenteVentas' + JSON.stringify(gerente));
    return this.request('post', `${baseUrl}/gerente`, gerente);
  }

  async deleteGerente( id:string ){
    return this.request('delete', `${baseUrl}/gerente/${id}`, null, 'text');
  }

  async updateGerente(id:string, gerente:Gerente){
    return this.request('put', `${baseUrl}/gerente/${id}`, gerente,'text');
  }
}
