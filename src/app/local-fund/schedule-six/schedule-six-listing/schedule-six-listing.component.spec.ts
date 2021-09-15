import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleSixListingComponent } from './schedule-six-listing.component';

describe('ScheduleSixListingComponent', () => {
  let component: ScheduleSixListingComponent;
  let fixture: ComponentFixture<ScheduleSixListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleSixListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleSixListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
