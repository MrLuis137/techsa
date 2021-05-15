import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDeviceFormComponent } from './new-device-form.component';

describe('NewDeviceFormComponent', () => {
  let component: NewDeviceFormComponent;
  let fixture: ComponentFixture<NewDeviceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDeviceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDeviceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
