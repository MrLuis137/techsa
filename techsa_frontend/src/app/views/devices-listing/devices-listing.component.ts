import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Dispositivo } from '../../models/Dispositivo';
import { DeviceService } from '../../services/device.service';


@Component({
  selector: 'app-devices-listing',
  templateUrl: './devices-listing.component.html',
  styleUrls: ['./devices-listing.component.css']
})
export class DevicesListingComponent implements OnInit {
  deviceList:Dispositivo[] = [];

  constructor(private car :CartService, private deviceService:DeviceService) { }

  ngOnInit(): void {
    this.refresh();
    this.addToCart()
    console.log(this.deviceList);
  }

  async refresh(){
    const data = await this.deviceService.getDispositivoAll();
    
    data.forEach(element => {
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

      this.deviceList.push(tempDevice);
    });

  }


  addToCart(){
    console.log("HOLA");
    let p = new Dispositivo()
    p.Almacenamiento = 100
    p.Camara = 5
    p.Color = "rojo"
    p.Marca = "Samsung"

    //this.car.addPhone(p)
  }

}
