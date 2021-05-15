import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelephonyListingComponent } from './telephony-listing.component';

describe('TelephonyListingComponent', () => {
  let component: TelephonyListingComponent;
  let fixture: ComponentFixture<TelephonyListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelephonyListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelephonyListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
