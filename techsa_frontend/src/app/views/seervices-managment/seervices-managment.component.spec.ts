import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { SeervicesManagmentComponent } from './seervices-managment.component';

describe('SeervicesManagmentComponent', () => {
  let component: SeervicesManagmentComponent;
  let fixture: ComponentFixture<SeervicesManagmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeervicesManagmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeervicesManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
