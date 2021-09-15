import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleFiveListingComponent } from './schedule-five-listing.component';

describe('ScheduleFiveListingComponent', () => {
  let component: ScheduleFiveListingComponent;
  let fixture: ComponentFixture<ScheduleFiveListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleFiveListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleFiveListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
