import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjustmentAccountListingComponent } from './adjustment-account-listing.component';

describe('AdjustmentAccountListingComponent', () => {
  let component: AdjustmentAccountListingComponent;
  let fixture: ComponentFixture<AdjustmentAccountListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdjustmentAccountListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdjustmentAccountListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
