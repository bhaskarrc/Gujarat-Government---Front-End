import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpsAccountAdjustmentDetailListingComponent } from './nps-account-adjustment-detail-listing.component';

describe('NpsAccountAdjustmentDetailListingComponent', () => {
  let component: NpsAccountAdjustmentDetailListingComponent;
  let fixture: ComponentFixture<NpsAccountAdjustmentDetailListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpsAccountAdjustmentDetailListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpsAccountAdjustmentDetailListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
