import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovileTelephonyListingComponent } from './movile-telephony-listing.component';

describe('MovileTelephonyListingComponent', () => {
  let component: MovileTelephonyListingComponent;
  let fixture: ComponentFixture<MovileTelephonyListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovileTelephonyListingComponent ]
    })
    .compileComponents();
  }));

  
  beforeEach(() => {
    fixture = TestBed.createComponent(MovileTelephonyListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
