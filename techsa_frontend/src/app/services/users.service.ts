import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import {User} from '../models/User'

const baseUrl = "http://localhost:3000"

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private async request(method: string, url: string, data?: any) {

    console.log('request ' + JSON.stringify(data));
    const result = this.http.request(method, url, {
      body: data,
      responseType: 'json',
      observe: 'body',
      headers: {
      }
    });
    return new Promise<any>((resolve, reject) => {
      result.subscribe(resolve as any, reject as any);
    });
  }

  //Faltaría agregar autenticación
  constructor(private http: HttpClient) {
    
   }
/*
   createUser(user:User){
    return this.request('post', `${baseUrl}/users`, user);
   }

   getUsers(){
     return this.request('post',`${baseUrl}/users`);
   }*/
   agregarGerente(values){
    console.log('servicio',values)
    return this.request('post',`${baseUrl}/new-gerente`,values)
   }
   getGerente(){
    return this.request('get', `${baseUrl}/get-gerente`);;
   }
    
}
