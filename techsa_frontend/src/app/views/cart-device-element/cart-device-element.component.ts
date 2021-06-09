import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-device-element',
  templateUrl: './cart-device-element.component.html',
  styleUrls: ['./cart-device-element.component.css']
})
export class CartDeviceElementComponent implements OnInit {

  constructor() { }
  @Input() device;
  title:String

  ngOnInit(): void {
    this.title = this.device.marca + ' ' + this.device.Modelo  
  }
  
  delete(){}
}
