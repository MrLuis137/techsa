import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-device-form',
  templateUrl: './new-device-form.component.html',
  styleUrls: ['./new-device-form.component.css']
})
export class NewDeviceFormComponent implements OnInit {
  
  constructor(private builder:FormBuilder) { 
    

  }
  
  ngOnInit(): void {
  }
  
}
