import { Component, OnInit } from '@angular/core';
import { NotificationsService} from 'angular2-notifications'

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {

  constructor(private service:NotificationsService) { }
  ngOnInit(): void {
  }
  
  add(firstName:String){
    //Ahora solo tiene un parametro porque intente dejarlo lo mas 
    //sencillo posible
    console.log(firstName)
    //this.onSuccess("Agregado")
  }

  onSuccess(mesagge:String){
    this.service.success(
      'Success',
      mesagge, 
      {
      position: ['bottom','right'],
      animate: 'fade',
      showProgressBar:true
      }
    )
  }

}
