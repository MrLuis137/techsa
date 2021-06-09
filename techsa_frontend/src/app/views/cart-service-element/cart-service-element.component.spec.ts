import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartServiceElementComponent } from './cart-service-element.component';

describe('CartServiceElementComponent', () => {
  let component: CartServiceElementComponent;
  let fixture: ComponentFixture<CartServiceElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartServiceElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartServiceElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
