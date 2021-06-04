import { Component, OnInit } from '@angular/core';
import { DeviceService} from '../../services/device.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modify-device',
  templateUrl: './modify-device.component.html',
  styleUrls: ['./modify-device.component.css']
})
export class ModifyDeviceComponent implements OnInit {

  constructor(
    private deviceService:DeviceService,
    private _ac:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this._ac.paramMap.subscribe(async param =>{
      const id =param.get('id');
      console.log("Id a modificar",id)
    })
  }
  modify(values:any){
    console.log(values)
  }

}
