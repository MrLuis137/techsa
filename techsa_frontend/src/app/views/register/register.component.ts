import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, FormControl } from '@angular/forms';


/* Solamente esta el html, si gusta dar funcionalidad,adelante*/
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  newClientForm: FormGroup
  constructor(private builder:FormBuilder) { 
    this.newClientForm =  this.builder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      userName: [''],
      password: ['']
    })
  }

  ngOnInit(): void {
  }
  register(values){
    console.log(values)
  }
}
