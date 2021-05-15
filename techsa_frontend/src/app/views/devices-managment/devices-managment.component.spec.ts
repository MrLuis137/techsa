import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicesManagmentComponent } from './devices-managment.component';

describe('DevicesManagmentComponent', () => {
  let component: DevicesManagmentComponent;
  let fixture: ComponentFixture<DevicesManagmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevicesManagmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicesManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
