import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewlandlineFormComponent } from './new-landline-form.component';

describe('NewlandlineFormComponent', () => {
  let component: NewlandlineFormComponent;
  let fixture: ComponentFixture<NewlandlineFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewlandlineFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewlandlineFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
