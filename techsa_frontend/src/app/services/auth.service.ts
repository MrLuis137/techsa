import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';


const baseUrl = "http://localhost:4201"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  //envia la peticion de login al backend

  private async request(method: string, url:string, data?:any, responseType?:any){
    
    //console.log('request' + JSON.stringify(data));
    const result = this.http.request(method,url,{
      body:data,
      responseType:responseType || 'text',
      observe:'body',
      headers:{
      }
    });
    return new Promise<any>((resolve,reject) =>{
      result.subscribe(resolve as any, reject as any);
    });
  }

  async login( username:string, password:string ){
    //console.log('createAgenteVentas' + JSON.stringify(agenteVentas));
    const response = await this.request('post', `${baseUrl}/auth`, {username:username, password:password});
    const jsonResponse = JSON.parse(response);

    localStorage.setItem('access_token', jsonResponse.token);
    return true;
  }

  async getUserRole( token:string ){
    return this.request('get',`${baseUrl}/auth/role/${token}`);
  }

  //Quita el access token del local storage 
  async logout(){
    localStorage.removeItem('access_token');
  }

  //Retorna si el token existe o no 
  public get loggedIn(): boolean{
    return (localStorage.getItem('access_token') != null);
  }

}
