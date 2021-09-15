import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleFourListingComponent } from './schedule-four-listing.component';

describe('ScheduleFourListingComponent', () => {
  let component: ScheduleFourListingComponent;
  let fixture: ComponentFixture<ScheduleFourListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleFourListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleFourListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
