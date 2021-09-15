import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiDailyInputSheetListingComponent } from './gi-daily-input-sheet-listing.component';

describe('GiDailyInputSheetListingComponent', () => {
  let component: GiDailyInputSheetListingComponent;
  let fixture: ComponentFixture<GiDailyInputSheetListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiDailyInputSheetListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiDailyInputSheetListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
