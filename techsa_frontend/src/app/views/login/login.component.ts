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
      console.log(submit);
      this.redirect();
      //this.router.navigate(['my-services']);
    }else{
      this.error = 'No se pudo autenticar';
    };
  }

  async redirect(){
    const token = localStorage.getItem('access_token');
    const role = await this.auth.getUserRole(token);

    if (JSON.parse(role).role == "cliente" ){
      console.log("ES UN CLIENTE");
    };
    if (JSON.parse(role).role == "gerente" ){
      console.log("ES UN GERENTE");
    };
    if (JSON.parse(role).role == "agenteventas" ){
      console.log("ES UN AGENTEVENTAS");
    };
  }

}
