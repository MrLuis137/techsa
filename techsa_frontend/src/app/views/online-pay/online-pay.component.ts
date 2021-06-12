import { Component, OnInit } from '@angular/core';
import { ContratoService } from '../../services/contrato.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-online-pay',
  templateUrl: './online-pay.component.html',
  styleUrls: ['./online-pay.component.css']
})
export class OnlinePayComponent implements OnInit {
  services=[]
  constructor(
    private contratoService:ContratoService,
    private auth: AuthService
    ) { }

  async ngOnInit() {
    const token = localStorage.getItem('access_token');
    const id = await this.auth.getUserId(token);
    try {
      this.services=await this.contratoService.getAllContratosPendientesByIdCliente(id.slice(10,14))
    } catch (err) {
      alert("Error al cargar los datos. \n Intente recargar la página.");
    }  
  }

  //Manda a pagar el contrato de un id
  pay(idContrado:number){
    if(confirm("¿Desea Pagar esta factura?")){
      this.contratoService.pay(idContrado);
      location.reload()
    }
  }

}
