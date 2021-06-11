import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'techsa';
  baseUrl = 'http://localhost:4201';

  constructor(private auth:AuthService, private router:Router){}

  ngOnInit(): void {
  }

  logout(){
    this.auth.logout();
    this.router.navigate(['login']);
  }

}
