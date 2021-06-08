import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyInternetComponent } from './modify-internet.component';


describe('ModifyInternetComponent', () => {
  let component: ModifyInternetComponent;
  let fixture: ComponentFixture<ModifyInternetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyInternetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyInternetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
