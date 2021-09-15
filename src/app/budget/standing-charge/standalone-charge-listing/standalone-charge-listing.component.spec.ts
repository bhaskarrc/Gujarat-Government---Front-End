import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandaloneChargeListingComponent } from './standalone-charge-listing.component';

describe('StandaloneChargeListingComponent', () => {
  let component: StandaloneChargeListingComponent;
  let fixture: ComponentFixture<StandaloneChargeListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandaloneChargeListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandaloneChargeListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
