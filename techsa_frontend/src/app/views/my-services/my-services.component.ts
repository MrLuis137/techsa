import { Component, OnInit } from '@angular/core';
import { ContratoService } from '../../services/contrato.service';

@Component({
  selector: 'app-my-services',
  templateUrl: './my-services.component.html',
  styleUrls: ['./my-services.component.css']
})
export class MyServicesComponent implements OnInit {
  services=[]
  constructor(private contratoService:ContratoService) { }

  async ngOnInit() {
    this.services=await this.contratoService.getAllContratosByIdCliente(2201)
     console.log(this.services)
    
  }

}
