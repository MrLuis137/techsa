import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverageAreasComponent } from './coverage-areas.component';

describe('CoverageAreasComponent', () => {
  let component: CoverageAreasComponent;
  let fixture: ComponentFixture<CoverageAreasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoverageAreasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverageAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
