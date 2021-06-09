import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../models/Cliente';

const baseUrl = "http://localhost:4201"


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private async request(method: string, url: string, data?: any, responseType?:any) {

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

  getClientes(){
    return this.request('get',`${baseUrl}/cliente`);
  }

  createCliente(user:Cliente){
    return this.request('post', `${baseUrl}/cliente`, user);
  }

  getClienteById(id:string){
    return this.request('get', `${baseUrl}/cliente/${id}`);
  }

  deleteCliente( id:string ){
    return this.request('delete', `${baseUrl}/cliente/${id}`, null, 'text');
  }

  updatePlanFijo(id:string, cliente:Cliente){
    console.log("servicio updateCliente ");
    return this.request('put', `${baseUrl}/cliente/${id}`, cliente,'text');
  }


   //-------------------------------------------------------------Empleados
  getEmployee(pid_laboral:String){
    //Nose sabe si es gerente o agente de ventas. Hacer la logica de eso
   return [{id : 0,id_laboral: 1,nombre: 'Allison',usuario: 'Alli',cedula: 117980761,
   fechaNacimiento: '2000-12-13',puesto: 'Gerente',contrasenia: 'Allispw'}]
  }
  getEmployees(){
    return[{id : 0,id_laboral: 1,nombre: 'Allison',usuario: 'Alli',cedula: 117980761,
      fechaNacimiento: '2000-12-13',puesto: 'Gerente',contrasenia: 'Allispw'}]
  }
  deleteEmployee(employeeID:number,employeePuesto:String){
    if (employeePuesto=='Gerente'){
      //Llamar a elimnar un gerente
      return 'Empleado eliminado'
    }
    else{
      //LLama a eliminar un Agente de Ventas
      return 'Empleado eliminado'
    }
  }
  modifyEmployee(employeeID:number,employeePuesto:String,values){
    if (employeePuesto=='Gerente'){
      //Llamar a modificar un gerente
      return 'Empleado modificado'
    }
    else{
      //LLama a modificar un Agente de Ventas
      return 'Empleado modificado'
    }
  }
  agregarEmployee(values){
    if (values.puesto=='Gerente'){
      //Llamar a modificar un gerente
      return 'Gerente agregado'
    }
    else{
      //LLama a modificar un Agente de Ventas
      return 'Agente de Ventas agregado'
    }
   }   
   //--------------------------------------------------Dispositivos
   getDevices(){
     return [{
       id:0,
       Modelo:'p10 lite',
       Marca:'Huawei',
       Ram:4,
       Almacenamiento:64,
       Precio:2000,
       Cantidad:10,
       Imagen:'https://www.camerafv5.com/images/devices/huawei_was-lx1_hwwas-h_hue244cf7006b3dd2f8015b3a94c2ceb11_78414_0x300_resize_lanczos_2.png'
     },{
      id:1,
      Modelo:'TT',
      Marca:'Xiaomi',
      Ram:10,
      Almacenamiento:700,
      Precio:100,
      Cantidad:1,
      Imagen:'http/.....'
    },
    {
      id:2,
      Modelo:'TT',
      Marca:'Xiaomi',
      Ram:10,
      Almacenamiento:700,
      Precio:100,
      Cantidad:1,
      Imagen:'http/.....'
    },{
      id:3,
      Modelo:'TT',
      Marca:'Xiaomi',
      Ram:10,
      Almacenamiento:700,
      Precio:100,
      Cantidad:1,
      Imagen:'http/.....'
    }]
    
    }
    deleteDevice(DeviceId:number){
      return 'dispositivo borrado'
    } 
}
