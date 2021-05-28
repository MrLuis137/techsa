import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modify-employee',
  templateUrl: './modify-employee.component.html',
  styleUrls: ['./modify-employee.component.css']
})
export class ModifyEmployeeComponent implements OnInit {
  modifyEmployeeForm: FormGroup;
  data= {address: "",
  datebirth: "",
  email: "",
  id: 0,
  job: "",
  name: "",
  password: "",
  workid: 0,
  _id: 0};
  constructor(private builder:FormBuilder, private _ac:ActivatedRoute) { 
    this.modifyEmployeeForm =  this.builder.group({
      firstName: new FormControl(),
      lastName: new FormControl(),
      EmployeeId:new FormControl(),
      workid: new FormControl(),
      datebirth: new FormControl(),
      password:new FormControl(),
      job:new FormControl(),
      email:new FormControl(),
      id:new FormControl(),
      address:new FormControl()
    });
    
  }

  ngOnInit(): void {
    this._ac.paramMap.subscribe(param =>{
      const id =param.get('id')
      //TRAER LOS DATOS DE BASE y asignarlos al modifyEmployeeForm     
    })
    this.modifyEmployeeForm.setValue({address: "Turrialba",
     datebirth: "13/12/2000",
     email: "allisonSolno@gmail.com",
     EmployeeId: 25478,
     job: "Empleado",
     firstName: "Allison",
     lastName:"Solano",
     password: "AllisonContrasena",
     workid: 125478,
     id: 1})
     console.log(this.data)
  }
  modify(values){
    //Eviar a la base los datos y manejar si hay errores
    console.log(values)
  }

}
