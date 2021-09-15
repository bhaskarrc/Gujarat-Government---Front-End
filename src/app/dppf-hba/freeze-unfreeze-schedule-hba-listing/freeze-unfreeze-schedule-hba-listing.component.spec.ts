import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreezeUnfreezeScheduleHbaListingComponent } from './freeze-unfreeze-schedule-hba-listing.component';

describe('FreezeUnfreezeScheduleHbaListingComponent', () => {
  let component: FreezeUnfreezeScheduleHbaListingComponent;
  let fixture: ComponentFixture<FreezeUnfreezeScheduleHbaListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreezeUnfreezeScheduleHbaListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreezeUnfreezeScheduleHbaListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
