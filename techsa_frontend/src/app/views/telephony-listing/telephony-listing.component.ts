import { Component, OnInit } from '@angular/core';
import { PlanfijoService } from '../../services/planfijo.service';
import { PlanFijo } from '../../models/PlanFijo';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-telephony-listing',
  templateUrl: './telephony-listing.component.html',
  styleUrls: ['./telephony-listing.component.css']
})

//Componente que despliega la lista de telefonía fija 
export class TelephonyListingComponent implements OnInit {

  telephonyListingData:PlanFijo[] = []  //Lista de planes fijos que se muestran en el 

  constructor(public planFijoService:PlanfijoService, public router:Router, public auth:AuthService) { }


  //Función que se ejecuta cuando secarga la página
  ngOnInit(): void {
    this.refresh();  //LLama a refresh
    console.log(this.telephonyListingData);
  }

  //Pide al backend la lista de planes fijos y los
  //guarda en la lista de telephonyListingData
  async refresh(){
    const data = await this.planFijoService.getPlanFijoAll(); //Pide la lista al backend
    //Por cada elemento de la data, crea un nuevo planFijo
    if (data != false){
      data.forEach(element => {   //Itera por cada elemento en data 
        let newPlanFijo = new PlanFijo;
        newPlanFijo.ID = element.ID;
        newPlanFijo.NombrePlan = element.NombrePlan;
        newPlanFijo.IdServicio = element.idServicioId;
        newPlanFijo.Minutos = element.Minutos;
        newPlanFijo.FijoTechsa = element.FijoTechsa;
        newPlanFijo.FijoOperador = element.FijoOperador;
        newPlanFijo.MovilCualquiera = element.MovilCualquiera;
        newPlanFijo.PrecioMensual = element.PrecioMensual;
        this.telephonyListingData.push(newPlanFijo);      
      });
    }else{
      alert("No se pudieron cargar los planes fijos \n Intentelo de nuevo");
    }
  }

  //addToCart
  //Añade un planFijo al carrito
  addToCart(planFijo:PlanFijo){
    if (this.auth.loggedIn) {   //Si ya está logueado, puede adquirir el servicio 
      console.log("TelephonyListing:addtoCart:Añadiendo Producto al carrito");
      console.log(planFijo);

      //Añadir al carrito
    }else{  //Si no está logueado recibe un mensaje de error
      if(confirm("Debe inicar sesión para adquirir el producto \n ¿Desea ir a la página de LogIn?")){
        this.router.navigate(['login']);
      }
    }
  }
}
