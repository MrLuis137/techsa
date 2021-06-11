import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyContratoComponent } from './modify-contrato.component';

describe('ModifyContratoComponent', () => {
  let component: ModifyContratoComponent;
  let fixture: ComponentFixture<ModifyContratoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyContratoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
