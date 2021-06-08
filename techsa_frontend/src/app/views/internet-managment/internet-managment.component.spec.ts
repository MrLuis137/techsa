import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { InternetManagmentComponent } from './internet-managment.component';

describe('InternetManagmentComponent', () => {
  let component: InternetManagmentComponent;
  let fixture: ComponentFixture<InternetManagmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternetManagmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternetManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
