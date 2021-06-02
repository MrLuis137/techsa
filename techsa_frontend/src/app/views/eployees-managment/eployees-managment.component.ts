import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-eployees-managment',
  templateUrl: './eployees-managment.component.html',
  styleUrls: ['./eployees-managment.component.css']
})
export class EployeesManagmentComponent implements OnInit {
  employees = [
    {"_id":1,
      "name":'Allison Solano',
    "workid":125478,
    "id":25478,
    "email":'allisonSolno@gmail.com',
    "address":'Turrialba',
    "password":'AllisonContrasena',
    "datebirth":'13/12/2000',
    "job":'Administrador'
    },
    {"_id":2,
      "name":'Allison Solano',
    "workid":125478,
    "id":25478,
    "email":'allisonSolno',
    "address":'Turrialba',
    "password":'AllisonContrasena',
    "datebirth":'13/12/2000',
    "job":'Administrador'
    }
  ]
  constructor(private base:UsersService) { }

  async ngOnInit() {
    //employees= 
    console.log(await this.base.getGerente());
  }
  delete (employee:String){
    console.log("Eliminando empleado: ",employee)
  }
  modify (employee:String){
    console.log("Modificando empleado: ",employee)
  }

}
