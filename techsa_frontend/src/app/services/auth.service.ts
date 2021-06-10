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
    
    console.log('request' + JSON.stringify(data));
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
    localStorage.setItem('access_token', response.token);
    console.log(response);
    console.log(localStorage.getItem('access_token'));

  
    return true;
  }

  // login(username:string, password:string):Observable<boolean>{
  //   return this.http.post<{token:string}>(baseUrl + '/auth', {username:username, password:password})
  //     .pipe(
  //       map(result => {
  //         localStorage.setItem('access_token',result.token);
  //         console.log(result.token);
  //         return true;
  //       })
  //     );
  // }

  //Quita el access token del local storage 
  logout(){
    localStorage.removeItem('access_token');
  }

  //Retorna si el token existe o no 
  public get loggedIn(): boolean{
    return (localStorage.getItem('access_token') != null);
  }

}
