import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {

  constructor(public auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    console.log("Cerrando Sesión");
    this.auth.logout();
    this.router.navigate(['login']);
  }

}
