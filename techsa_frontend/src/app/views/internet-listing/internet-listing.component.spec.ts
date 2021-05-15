import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternetListingComponent } from './internet-listing.component';

describe('InternetListingComponent', () => {
  let component: InternetListingComponent;
  let fixture: ComponentFixture<InternetListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternetListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternetListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
