import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyMobilePhoneComponent } from './modify-mobilephone.component';

describe('ModifyMobilePhoneComponent', () => {
  let component: ModifyMobilePhoneComponent;
  let fixture: ComponentFixture<ModifyMobilePhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyMobilePhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyMobilePhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
