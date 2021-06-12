import { ConstantPool } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ContratoService } from '../../services/contrato.service';

@Component({
  selector: 'app-modify-contrato',
  templateUrl: './modify-contrato.component.html',
  styleUrls: ['./modify-contrato.component.css']
})
export class ModifyContratoComponent implements OnInit {
  data=[]
  idContrato
  constructor(
    private contratoService:ContratoService,
    private _ac:ActivatedRoute,
    ) { }


  async ngOnInit() {
    this._ac.paramMap.subscribe(async param =>{
      this.idContrato = param.get('id');
      this.data= await this.contratoService.getPlanesTipo(parseInt(this.idContrato))
    })
    
  }

  //Cambia el servicio relacionado a al contrato 
  async elegir(idServicio:number){
    this.contratoService.actualizarContrato(this.idContrato,idServicio)

  }

}
