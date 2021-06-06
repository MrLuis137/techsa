import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NewMobilePhoneFormComponent } from './new-MobilePhone-form.component';

describe('NewMobilePhoneFormComponent', () => {
  let component: NewMobilePhoneFormComponent;
  let fixture: ComponentFixture<NewMobilePhoneFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMobilePhoneFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMobilePhoneFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
