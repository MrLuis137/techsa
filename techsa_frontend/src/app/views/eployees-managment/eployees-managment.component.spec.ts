import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EployeesManagmentComponent } from './eployees-managment.component';

describe('EployeesManagmentComponent', () => {
  let component: EployeesManagmentComponent;
  let fixture: ComponentFixture<EployeesManagmentComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EployeesManagmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EployeesManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
