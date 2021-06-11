import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-client-navbar',
  templateUrl: './client-navbar.component.html',
  styleUrls: ['./client-navbar.component.css']
})
export class ClientNavbarComponent implements OnInit {

  isCliente:boolean = true;
  isGerente:boolean = false;
  isAgente:boolean = false;
  

  
  constructor(public auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    console.log("Cerrando Sesión");
    this.auth.logout();
    this.router.navigate(['login']);
  }
}
