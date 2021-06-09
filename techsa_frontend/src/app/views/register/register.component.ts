import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, FormControl } from '@angular/forms';
import { Cliente } from '../../models/Cliente';
import { UsersService } from '../../services/users.service';


/* Solamente esta el html, si gusta dar funcionalidad,adelante*/
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  newClientForm: FormGroup
  constructor(private builder:FormBuilder, private clienteService:UsersService) { 
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
    newClient.Nombre = values.firstName;
    newClient.Apellido = values.lastName;
    newClient.Correo = values.email;
    newClient.NombreUsuario = values.userName;
    newClient.Contrasenia = values.password;
    newClient.Residencia = values.residence;

    await this.clienteService.createCliente(newClient);
    console.log(newClient);
  }
}
