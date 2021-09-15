import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallanPreparationAtCounterListingComponent } from './challan-preparation-at-counter-listing.component';

describe('ChallanPreparationAtCounterListingComponent', () => {
  let component: ChallanPreparationAtCounterListingComponent;
  let fixture: ComponentFixture<ChallanPreparationAtCounterListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallanPreparationAtCounterListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallanPreparationAtCounterListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
