import { Component, OnInit } from '@angular/core';
import { ContratoService } from '../../services/contrato.service';

@Component({
  selector: 'app-online-pay',
  templateUrl: './online-pay.component.html',
  styleUrls: ['./online-pay.component.css']
})
export class OnlinePayComponent implements OnInit {
  services=[]
  constructor(private contratoService:ContratoService) { }

  async ngOnInit() {
    this.services=await this.contratoService.getAllContratosPendientesByIdCliente(2201)
     console.log(this.services)
     
  }
  pay(idContrado:number){
    this.contratoService.pay(idContrado);
  }

}
