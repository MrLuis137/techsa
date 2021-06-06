import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-shoping-car',
  templateUrl: './shoping-car.component.html',
  styleUrls: ['./shoping-car.component.css']
})
export class ShopingCarComponent implements OnInit {

  constructor(public car:CartService) { }

  ngOnInit(): void {
    const data = this.car.getServiciosById('1')
    if(data){
      console.log(data)
      this.tempCallback()
    }
  }

  tempCallback(){
    console.log("Eliminado :3")
  }

}
