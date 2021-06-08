import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { LandlineManagmentComponent } from './landline-managment.component';

describe('LandlineManagmentComponent', () => {
  let component: LandlineManagmentComponent;
  let fixture: ComponentFixture<LandlineManagmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandlineManagmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandlineManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
