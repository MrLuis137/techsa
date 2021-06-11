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

  async submit(){
    const submit = await this.auth.login(this.username, this.password);
    if(submit){
      this.redirect();
      //this.router.navigate(['my-services']);
    }else{
      this.error = 'No se pudo autenticar';
      alert(this.error);
    };
  }

  async redirect(){
    const token = localStorage.getItem('access_token');
    const role = await this.auth.getUserRole(token);

    if (JSON.parse(role).role == "cliente" ){
      console.log("ES UN CLIENTE");
      this.auth.isCliente = true;
      this.auth.isGerente = false;
      this.router.navigate(['my-services']);
    };
    if (JSON.parse(role).role == "gerente" ){
      console.log("ES UN GERENTE");
      this.auth.isCliente = false;
      this.auth.isGerente = true;
      this.router.navigate(['employees-managment']);
    };
    if (JSON.parse(role).role == "agenteventas" ){
      this.auth.isCliente = false;
      this.auth.isGerente = false;
      console.log("ES UN AGENTEVENTAS");
      this.router.navigate(['landline-managment']);
    };
  }

}
