import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreezeUnfreezeScheduleListingComponent } from './freeze-unfreeze-schedule-listing.component';

describe('FreezeUnfreezeScheduleListingComponent', () => {
  let component: FreezeUnfreezeScheduleListingComponent;
  let fixture: ComponentFixture<FreezeUnfreezeScheduleListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreezeUnfreezeScheduleListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreezeUnfreezeScheduleListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
