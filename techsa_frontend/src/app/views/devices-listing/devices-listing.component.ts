import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Dispositivo } from '../../models/Dispositivo';
import { DeviceService } from '../../services/device.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router, RouterStateSnapshot } from '@angular/router';


@Component({
  selector: 'app-devices-listing',
  templateUrl: './devices-listing.component.html',
  styleUrls: ['./devices-listing.component.css']
})

//Componente que genera la la vista para mostrar los dispositivos disponibles en TechSA
export class DevicesListingComponent implements OnInit {
  //Lista de dispositivos del backend
  deviceList:Dispositivo[] = [];

  constructor(private car :CartService, private deviceService:DeviceService, private auth:AuthService, private router:Router) { }

  //Función que se ejecuta al iniciar la página
  ngOnInit(): void {
    this.refresh();
  }

  //Carga la lista de dispositivos en memoria 
  async refresh(){
    const data = await this.deviceService.getDispositivoAll();  //Hace el request al backend
    
    if(data != false){ 
      data.forEach(element => {   //Por cada elemento de la lista del backend crea un elemento y lo inserta en la lista 
        let tempDevice = new Dispositivo;
        tempDevice.Id = element.Id;
        tempDevice.Modelo = element.Modelo;
        tempDevice.Marca = element.Marca;
        tempDevice.Color = element.Color;
        tempDevice.Camara = element.Camara;
        tempDevice.Ram = element.Ram;
        tempDevice.Almacenamiento = element.Almacenamiento;
        tempDevice.Precio = element.Precio;
        tempDevice.Cantidad = element.Cantidad;
        tempDevice.Imagen = element.Imagen;

        this.deviceList.push(tempDevice); //Lo inserta en la lista
      });
    }else{
      alert("No se pudieron cargar los dispositivos \n Intentelo de nuevo");  //muestra un error si hubo un error en el servidor
    }
  }

  //addToCart
  //Añade un planFijo al carrito
  addToCart(device:Dispositivo){
    if (this.auth.loggedIn) {   //Si ya está logueado, puede adquirir el servicio 
      console.log("DeviceListing:addtoCart:Añadiendo Producto al carrito");
      console.log(device);

      //Añadir al carrito
      
    }else{  //Si no está logueado recibe un mensaje de error
      if(confirm("Debe inicar sesión para adquirir el producto \n ¿Desea ir a la página de LogIn?")){
        this.router.navigate(['login']);
      }
    }
  }

}
