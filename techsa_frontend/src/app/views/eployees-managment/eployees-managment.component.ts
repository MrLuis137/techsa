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
    "email":'allisonSolno@gmail.com',
    "address":'Turrialba',
    "password":'AllisonContrasena',
    "datebirth":'13/12/2000',
    "job":'Administrador'
    },
    {"name":'Allison Solano',
    "workid":125478,
    "id":25478,
    "email":'allisonSolno',
    "address":'Turrialba',
    "password":'AllisonContrasena',
    "datebirth":'13/12/2000',
    "job":'Administrador'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  delete (employee:String){
    console.log("Eliminando empleado: ",employee)
  }
  modify (employee:String){
    console.log("Modificando empleado: ",employee)
  }

}
