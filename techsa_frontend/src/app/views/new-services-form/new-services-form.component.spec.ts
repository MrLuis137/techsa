import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewServicesFormComponent } from './new-services-form.component';

describe('NewServicesFormComponent', () => {
  let component: NewServicesFormComponent;
  let fixture: ComponentFixture<NewServicesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewServicesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewServicesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
