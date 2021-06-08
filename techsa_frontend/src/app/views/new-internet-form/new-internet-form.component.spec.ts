import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewInternetFormComponent } from './new-internet-form.component';

describe('NewInternetFormComponent', () => {
  let component: NewInternetFormComponent;
  let fixture: ComponentFixture<NewInternetFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewInternetFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewInternetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
