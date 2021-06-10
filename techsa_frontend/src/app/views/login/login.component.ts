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

  SubmitLogin(){

    if(this.auth.login(this.username, this.password)){
      this.router.navigate(['my-services'])
    }else{
      this.error = 'No se pudo autenticar';
    };
      
    console.log(this.username);
    console.log(this.password);
  }

  

}
