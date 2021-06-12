import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

// URL Para conectarse al Backend
const baseUrl = "http://localhost:4201"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //Variables para detectar que rol de usuario está logueado
  public isCliente:boolean = true;
  public isGerente:boolean = false;
  public isAgenteV:boolean = false;

  constructor(private http:HttpClient) { }

  //Envía una petición al backend
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

  //LOGIN
  //Función que envía las credenciales al backend /auth, y si existe el usuario 
  //el backend responde con un Token generado de JWT.
  async login( username:string, password:string ){
    //console.log('createAgenteVentas' + JSON.stringify(agenteVentas));
    console.log("Auth.Service:Enviando Petición de login al backend");
    const response = await this.request('post', `${baseUrl}/auth`, {username:username, password:password});
    const jsonResponse = JSON.parse(response);  //Parsea la respuesta del backend 
    localStorage.setItem('access_token', jsonResponse.token);  //Guarda el token dentro del local storage "Acá loguea al usuario "
    console.log("Auth.Service:Usuario logueado");
    return true;
  }

  //getUserRole
  //Envía el token al backend, para que el backend retorne el rol del usuario 
  async getUserRole( token:string ){
    console.log("Auth.Service:Enviando Petición de getRole al backend");
    return this.request('get',`${baseUrl}/auth/role/${token}`); //Envia el token y recibe el rol del usuario logueado
  }

  //getUserId
  //Envía el token al backend, para que el backend retorne el id del usuario logueado
  async getUserId( token:string ){
    console.log("Auth.Service:Enviando Petición de getUserId al backend");
    return this.request('get',`${baseUrl}/auth/id/${token}`); //Envía la petición al backend
  }

  //logout
  //Cierra la sesión del usuario, remueve el access_token del local storafe
  async logout(){
    console.log("Auth.Service:Cerrando sesión del usuario");
    //Indica que el rol actual es el cliente, para que muestre la barra de
    //navegacion del cliente.
    this.isCliente = true;  
    this.isGerente = false;
    this.isAgenteV = false;
    localStorage.removeItem('access_token');  //Remueve el token del localstorage, "cierra sesión"
  }

  //LoggedIn
  //Retorna si el token existe o no, para saber si hay un usuario loggueado o no. 
  public get loggedIn(): boolean{
    return (localStorage.getItem('access_token') != null); //Quita el token del local storage
  }

}
