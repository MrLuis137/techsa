import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { MobilephoneManagmentComponent } from './mobilephone-managment.component';

describe('MobilephoneManagmentComponent', () => {
  let component: MobilephoneManagmentComponent;
  let fixture: ComponentFixture<MobilephoneManagmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilephoneManagmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilephoneManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
