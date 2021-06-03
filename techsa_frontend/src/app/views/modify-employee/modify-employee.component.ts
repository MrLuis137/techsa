import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-modify-employee',
  templateUrl: './modify-employee.component.html',
  styleUrls: ['./modify-employee.component.css']
})
export class ModifyEmployeeComponent implements OnInit {
  modifyEmployeeForm: FormGroup;
  data= [{id : -1,id_laboral: -1,nombre: '',usuario: '',cedula: -1,
  fechaNacimiento: '',puesto: '',contrasenia: ''}];

  constructor(private builder:FormBuilder, private _ac:ActivatedRoute,
    private base:UsersService) { 
    this.modifyEmployeeForm =  this.builder.group({
      id :new FormControl(),
        id_laboral:new FormControl(),
        nombre: new FormControl(),
        usuario: new FormControl(),
        cedula: new FormControl(),
       fechaNacimiento: new FormControl(),
       puesto:new FormControl(),
       contrasenia: new FormControl()
    });
    
  }

   ngOnInit() {
    this._ac.paramMap.subscribe(async param =>{
      const id =param.get('id_laboral');
      this.data = await this.base.getEmployee(id)
      this.modifyEmployeeForm.setValue(this.data[0]);  
    })
  }
  modify(values){
    console.log(this.base.modifyEmployee(this.data[0].id,this.data[0].puesto,values))
    
  }

}
