import { ConstantPool } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


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
    private router:Router
    ) { }


  async ngOnInit() {
    this._ac.paramMap.subscribe(async param =>{
      this.idContrato = param.get('id');
      this.data= await this.contratoService.getPlanesTipo(parseInt(this.idContrato))})
    
  }

  //Cambia el servicio relacionado a al contrato 
  async elegir(idServicio:number){
    const morosidad = await this.contratoService.isMoroso(this.idContrato);
    console.log(morosidad)
    if (morosidad[0].Estado){
      alert("Contrato actualizado")
      await this.contratoService.actualizarContrato(this.idContrato,idServicio);
      
    }else{
      alert("No se puede modificar hasta que pague")
    }
    
  }

}
