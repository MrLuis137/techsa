import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import {first} from 'rxjs/operators';
import * as bcrypt from 'bcryptjs';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //Variables para el form 
  public username:string;
  public password:string;
  public error:string;

  constructor (private auth: AuthService, private router:Router) {}


  ngOnInit(): void {
  
  }

  //Función que se activa en el html, para que envíe el form al backend 
  async submit(){
    try {
      // const salt = bcrypt.genSaltSync(10);
      // const pass = bcrypt.hashSync(this.password, "hola");
      //console.log(pass);

      const submit = await this.auth.login(this.username, this.password); //Recibe la respuesta del backend
      this.redirect(); //Si el usuario se loguea satisfactoriamente, llama a redirect.

    } catch (err) {
      this.error = 'No se pudo autenticar';
      alert(this.error);  //Muestra una alerta 
    }
  }

  //Redirect 
  //Cuando se loguee el usuario dependiendo del rol 
  //del usuario redirecciona a una pagina en especifico.
  async redirect(){
    this.auth.loadRole()
    //Reviza que usuario cliente está logueado 
    if (this.auth.isCliente){
      console.log("redirect:ES UN CLIENTE");
      this.router.navigate(['my-services']); //Si es un cliente lo lleva a mis servicios
    };

    //Reviza que usuario gerente está logueado 
    if (this.auth.isGerente){
      console.log("redirect:ES UN GERENTE");
      this.router.navigate(['employees-managment']); //Si es un gerente lo lleva a la gestión de empleados
    };

    //Reviza que usuario agente de ventas está logueado 
    if (!this.auth.isCliente && !this.auth.isGerente){
      console.log("redirect:ES UN AGENTEVENTAS");
      this.router.navigate(['landline-managment']); //Si es un agente de ventas lo lleva a la gestión de telefonía. 
    };
  }
}
