import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyLandlineComponent } from './modify-landline.component';

describe('ModifyLandlineComponent', () => {
  let component: ModifyLandlineComponent;
  let fixture: ComponentFixture<ModifyLandlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyLandlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyLandlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
