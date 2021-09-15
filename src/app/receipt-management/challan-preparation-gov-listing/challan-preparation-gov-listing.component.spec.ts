import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallanPreparationGovListingComponent } from './challan-preparation-gov-listing.component';

describe('ChallanPreparationGovListingComponent', () => {
  let component: ChallanPreparationGovListingComponent;
  let fixture: ComponentFixture<ChallanPreparationGovListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallanPreparationGovListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallanPreparationGovListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
