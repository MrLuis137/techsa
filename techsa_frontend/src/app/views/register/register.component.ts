import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, FormControl } from '@angular/forms';
import { Cliente } from '../../models/Cliente';
import { UsersService } from '../../services/users.service';
import * as bcrypt from 'bcryptjs';
import { Router } from '@angular/router';


/* Solamente esta el html, si gusta dar funcionalidad,adelante*/
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  newClientForm: FormGroup
  constructor(private builder:FormBuilder, private clienteService:UsersService, private router:Router) { 
    this.newClientForm =  this.builder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      userName: [''],
      password: [''],
      residence: ['']
    })
  }

  ngOnInit(): void {
  }
  
  async register(values){
    let newClient = new Cliente;
    const salt = bcrypt.genSaltSync(10);
    const pass = bcrypt.hashSync(values.password, salt);
    console.log(pass);
    newClient.Nombre = values.firstName;
    newClient.Apellido = values.lastName;
    newClient.Correo = values.email;
    newClient.NombreUsuario = values.userName;
    newClient.Contrasenia = pass;
    newClient.Residencia = values.residence;

    try {
      await this.clienteService.createCliente(newClient); 
      alert("Cuenta creada");
      this.router.navigate(['login']);

    } catch (err) {
      alert("Error al crear la cuenta. \n Intente de nuevo");

    }
    console.log(newClient);
  }
}
