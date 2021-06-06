import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Dispositivo } from '../../models/Dispositivo';


@Component({
  selector: 'app-devices-listing',
  templateUrl: './devices-listing.component.html',
  styleUrls: ['./devices-listing.component.css']
})
export class DevicesListingComponent implements OnInit {

  constructor(private car :CartService) { }

  ngOnInit(): void {
    this.addToCart()
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
