import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eployees-managment',
  templateUrl: './eployees-managment.component.html',
  styleUrls: ['./eployees-managment.component.css']
})
export class EployeesManagmentComponent implements OnInit {
  employees = [
    {"name":'Allison Solano',
    "workid":125478,
    "id":25478,
    "password":'AllisonContrasena',
    "datebirth":'2/5/2021',
    "job":'Administrador'
    },
    {"name":'Allison Solano',
    "workid":125478,
    "id":25478,
    "password":'AllisonContrasena',
    "datebirth":'2/5/2021',
    "job":'Administrador'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
