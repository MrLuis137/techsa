import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import {first} from 'rxjs/operators';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username:string;
  public password:string;
  public error:string;



  constructor (private auth: AuthService, private router:Router) {}


  ngOnInit(): void {
  
  }

  //Función que se activa en el html, para que envíe el form al backend 
  async submit(){
    const submit = await this.auth.login(this.username, this.password); //Recibe la respuesta del backend
    if(submit){
      this.redirect(); //Si el usuario se loguea satisfactoriamente, llama a redirect.
      //this.router.navigate(['my-services']);
    }else{
      this.error = 'No se pudo autenticar';
      alert(this.error);  //Muestra una alerta 
    };
  }

  //Redirect 
  //Cuando se loguee el usuario dependiendo del rol 
  //del usuario redirecciona a una pagina en especifico.
  async redirect(){
    const token = localStorage.getItem('access_token'); //Pide el token de acceso en el local storage
    const role = await this.auth.getUserRole(token);  //Pide el rol del usuario 

    //Reviza que usuario cliente está logueado 
    if (JSON.parse(role).role == "cliente" ){
      console.log("redirect:ES UN CLIENTE");
      this.auth.isCliente = true;
      this.auth.isGerente = false;
      this.router.navigate(['my-services']); //Si es un cliente lo lleva a mis servicios
    };

    //Reviza que usuario gerente está logueado 
    if (JSON.parse(role).role == "gerente" ){
      console.log("redirect:ES UN GERENTE");
      this.auth.isCliente = false;
      this.auth.isGerente = true;
      this.router.navigate(['employees-managment']); //Si es un gerente lo lleva a la gestión de empleados
    };

    //Reviza que usuario agente de ventas está logueado 
    if (JSON.parse(role).role == "agenteventas" ){
      this.auth.isCliente = false;
      this.auth.isGerente = false;
      console.log("redirect:ES UN AGENTEVENTAS");
      this.router.navigate(['landline-managment']); //Si es un agente de ventas lo lleva a la gestión de telefonía. 
    };
  }
}
