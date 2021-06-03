import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-eployees-managment',
  templateUrl: './eployees-managment.component.html',
  styleUrls: ['./eployees-managment.component.css']
})
export class EployeesManagmentComponent implements OnInit {
  employees = []
  constructor(private base:UsersService) { }

  async ngOnInit() {
    this.employees = await this.base.getEmployees()
    console.log(this.employees);
  }
  delete (employeeID:number,employeePuesto:String){
    console.log("Eliminando empleado: ",employeeID,employeePuesto)
    this.base.deleteEmployee(employeeID,employeePuesto)
    
  }

}
