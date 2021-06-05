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

  /*getAgenteVentasAll(){
    return this.request('get', `${baseUrl}/agenteventas`);
  }
*/
  getDispositivosById(id:string){
    return this.request('get', `${baseUrl}/carritodispositivos`,id);
    //return this.request('get', `${baseUrl}/agenteventas`);
  }


  getServiciosById(id:string){
    return this.request('get', `${baseUrl}/carrito/servicios`,id);
    //return this.request('get', `${baseUrl}/agenteventas`);
  }
/*
  createAgenteVentas( agenteVentas:AgenteVentas ){
    console.log('createAgenteVentas' + JSON.stringify(agenteVentas));
    return this.request('post', `${baseUrl}/agenteventas`, agenteVentas);
  }

  deleteAgenteVentas( id:string ){
    return this.request('delete', `${baseUrl}/agenteventas/${id}`, null, 'text');
  }


/*@Injectable({
  providedIn: 'root'
})
export class CartService {
  //private cart = new BehaviorSubject<Array<Servicio>>(null); //Definimos nuestro BehaviorSubject, este debe tener un valor inicial siempre
  //public currentDataCart$ = this.cart.asObservable(); //Tenemos un observable con el valor actual del BehaviourSubject
  private serviceCar= new Array<Servicio>()
  private phoneCar = new Array<Dispositivo>();

  constructor() { }

  public addService(data: Servicio) {

    //Si no es el primer item del carrito
    if(this.serviceCar)
    {
      //Buscamos si ya cargamos ese item en el carrito
      let objIndex = this.serviceCar.findIndex((obj => obj.Id == data.Id));
      //Si ya cargamos uno aumentamos su cantidad
      if(objIndex != -1)
      {
        //this.serviceCar[objIndex].quantity += 1;
      }
      //Si es el primer item de ese tipo lo agregamos derecho al carrito
      else {
        this.serviceCar.push(data);
      }  
    }
    //Si es el primer elemento lo inicializamos
    else {
      this.serviceCar = [];
      this.serviceCar.push(data);
    } 
  }

  public addPhone(data: Dispositivo){
        //Obtenemos el valor actual
        //Si no es el primer item del carrito
        if(this.phoneCar)
        {
          //Buscamos si ya cargamos ese item en el carrito
          let objIndex = this.phoneCar.findIndex((obj => obj.Id == data.Id));
          //Si ya cargamos uno aumentamos su cantidad
          if(objIndex != -1)
          {
            //this.phoneCar[objIndex].quantity += 1;
          }
          //Si es el primer item de ese tipo lo agregamos derecho al carrito
          else {
            this.phoneCar.push(data);
          }  
        }
        //Si es el primer elemento lo inicializamos
        else {
          this.phoneCar = [];
          this.phoneCar.push(data);
    }
  }

  public removeElementCart(data:Dispositivo){
    //Buscamos el item del carrito para eliminar
    let objIndex = this.phoneCar.findIndex((obj => obj.Id == data.Id));
    if(objIndex != -1)
    {
      //Seteamos la cantidad en 1 (ya que los array se modifican los valores por referencia, si vovlemos a agregarlo la cantidad no se reiniciará)
      //this.phoneCar[objIndex].quantity = 1;
      //Eliminamos el item del array del carrito
      this.phoneCar.splice(objIndex,1);
    }
  }

  public getPhoneData(){
    return this.phoneCar;
  }*/
}
