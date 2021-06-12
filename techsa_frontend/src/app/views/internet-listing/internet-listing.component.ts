import { Component, OnInit } from '@angular/core';
import { InternetserviceService } from 'src/app/services/internetservice.service';
import { PlanfijoService } from 'src/app/services/planfijo.service';
import { MovileTelephonyService } from '../../services/moviletelephony.service';
import { PlanInternet } from '../../models/PlanInternet';
import { CartService } from '../../services/cart.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-internet-listing',
  templateUrl: './internet-listing.component.html',
  styleUrls: ['./internet-listing.component.css']
})
export class InternetListingComponent implements OnInit {

  internetList = [];                //Lista de planes de internet 
  internetLandLineList = [];        //Lista de planes internet + fijo
  internetLandlineMobileList = [];  //Lista de internet + fijo + movil

  
  internetLandline_And_MobilesPlans = []; //Lista de objetos PlanInternet con informacion de fijos y moviles


  constructor(private mobileTelephonyService:MovileTelephonyService,
    private planFijoService:PlanfijoService,
    private internetService:InternetserviceService,
    private auth:AuthService, private router:Router,
    private carrito:CartService ) { }

  //Llama a refresh cuando se carga la pagina
  ngOnInit(): void {
    try {
      this.refresh();
    } catch (err) {
      alert("Error al cargar los datos. \n Intente recargar la página.");
    }
  }

  async refresh() {
    try {
          //Carga las listas de las tablas
          const internetListData = await this.internetService.getPlanInternetAll();
          const internetLandlineListData = await this.internetService.getPlanInternetFijoAll();
          const internetLandlineMobileListData  = await this.internetService.getPlanInternetFijoMovilAll();
          
          this.internetList = internetListData;
          this.internetLandLineList = internetLandlineListData;
          this.internetLandlineMobileList = internetLandlineMobileListData;
      
          //Llama a la función que se encarga de crear los planes internet  + fijo
          this.internetLandline();
          //Llama a la función que se encarga de crear los planes internet  + fijo + movil
          this.internetLandlineMobile();
          //console.log(this.internetList);
          //console.log(this.internetLandline_And_MobilesPlans);
    } catch (err) {
      alert("Error al cargar los datos. \n Intente recargar la página.");
    }

  }

  //internetLandline
  //Devuelve una lista con todos los planes fijos asociados a un plan de internet 
  async internetLandline(){

    //const internetLandlineData = await this.internetService.getPlanInternetFijo_IdInternet(idInternet);
    //Por cada elemento dentro de la lista de internet+fijo, busca los planes de internet y fjo asociados
    //y los guarda en un nuevo elemento de PlanInternet
    for( const element of  this.internetLandLineList){
      //Busca el plan fijo
      const tempFijo = await this.planFijoService.getPlanFijobyId(element.idPlanFijoID);
      //Busca el plan internet
      const tempInternet = await this.internetService.getPlanInternet_idInternet(element.idPlanInternetID);
      
      //Crea un nuevo plan de internet 
      const tempInternetModel:PlanInternet = new PlanInternet;
      tempInternetModel.ID = element.ID;
      tempInternetModel.Descripcion = tempFijo[0].Minutos + " minutos + \n" + tempInternet[0].Descripcion;
      tempInternetModel.PrecioMensual = element.PrecioMensual;
      tempInternetModel.NombrePlan = "Techsa" + tempInternet[0].Velocidad + "@FIJO" ;
      tempInternetModel.IdServicio = element.idServicioId;
      tempInternetModel.Velocidad = tempInternet[0].Velocidad;
      //Ingresa el elemento a la ista
      this.internetLandline_And_MobilesPlans.push(tempInternetModel);
    }
  }



  //internetLandlineMobile
  //Devuele una lista con todos los planes moviles y fijos asociados a un plan de internet 
  async internetLandlineMobile( ){
      
    //Por cada elemento dentro de la lista de internet+fijo+movil, busca los planes de internet, movil y fjo asociados
    //y los guarda en un nuevo elemento de PlanInternet
    for( const element of  this.internetLandlineMobileList){

      //Busca el plan fijo
      const tempFijo = await this.planFijoService.getPlanFijobyId(element.idPlanFijoID);
      //Busca el plan Internet
      const tempInternet = await this.internetService.getPlanInternet_idInternet(element.idPlanInternetID);
      //Busca el plan Movil
      const tempMobile = await this.mobileTelephonyService.getPlanMovilById(element.idPlanMovilID)
      
      //Crea un nuevo plan internet con la información  de esos tres planes
      const tempInternetModel:PlanInternet = new PlanInternet;
      tempInternetModel.ID = element.ID;
      tempInternetModel.Descripcion = tempFijo[0].Minutos + " minutos Fijo + " + tempInternet[0].Descripcion+ " + " + tempMobile.Descripcion + " Movil";
      tempInternetModel.PrecioMensual = element.PrecioMensual;
      tempInternetModel.NombrePlan = "Techsa FULL" + tempInternet[0].Velocidad;
      tempInternetModel.IdServicio = element.idServicioId;
      tempInternetModel.Velocidad = tempInternet[0].Velocidad;
      //Añade el nuevo plan internet a la lista
      this.internetLandline_And_MobilesPlans.push(tempInternetModel);
    }
  }

  //chooseGradient
  //Función para escoger un gradient para cada tipo de velocidad de internet 
  //Cambia las opciones del "class=" del componente html
  //Por defecto 
  chooseGradient(vel:number){
    if (vel == 50) {
      return {
        'container':true,
         'internet-section':true,
          'gradient50':true
      };
    };
    if (vel == 100) {
      return {
        'container':true,
         'internet-section':true,
          'gradient100':true
      };
    };
    if (vel == 200) {
      return {
        'container':true,
         'internet-section':true,
          'gradient200':true
      };
    }else {
      return {
        'container':true,
         'internet-section':true,
          'gradient30':true
      };
    }

  }

  //addToCart
  //Añade un planFijo al carrito
  async addToCart(planInternet:any){
    if (this.auth.loggedIn) {   //Si ya está logueado, puede adquirir el servicio 
      console.log("Internet Listing:addtoCart:Añadiendo Producto al carrito");
      let identificador = planInternet.idServicioId;
      if(identificador == undefined){
        identificador = planInternet.IdServicio;
      }


      try {
        alert("Plan Internet Añadido al carrito");
        const token = localStorage.getItem('access_token');
        const id = await this.auth.getUserId(token);
        await this.carrito.setServicioByUserId(id.slice(10,14),identificador);
      } catch (err) {
        alert("Error añadiendo al carrito");
      }

    }else{  //Si no está logueado recibe un mensaje de error
      if(confirm("Debe inicar sesión para adquirir el producto \n ¿Desea ir a la página de LogIn?")){
        this.router.navigate(['login']);
      }
    }
  }

}
