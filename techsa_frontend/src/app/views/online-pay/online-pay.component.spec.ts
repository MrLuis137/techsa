import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinePayComponent } from './online-pay.component';

describe('OnlinePayComponent', () => {
  let component: OnlinePayComponent;
  let fixture: ComponentFixture<OnlinePayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlinePayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlinePayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
