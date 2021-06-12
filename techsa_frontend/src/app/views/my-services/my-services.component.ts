import { Component, OnInit } from '@angular/core';
import { ContratoService } from '../../services/contrato.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-my-services',
  templateUrl: './my-services.component.html',
  styleUrls: ['./my-services.component.css']
})
export class MyServicesComponent implements OnInit {
  services=[]
  constructor(
    private contratoService:ContratoService,
    private auth: AuthService
    ) { }

  async ngOnInit() {
    const token = localStorage.getItem('access_token');
    const id = await this.auth.getUserId(token);
    this.services=await this.contratoService.getAllContratosByIdCliente(id.slice(10,14))
    
    
    
  }
  //cancela un contrato con ese id
  async cancel(idContrato:number){
    await this.contratoService.delete(idContrato).then((data)=>{
        console.log(data)
    })
  }
 

}
