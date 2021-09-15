import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutcomeAchivementListingComponent } from './outcome-achivement-listing.component';

describe('OutcomeAchivementListingComponent', () => {
  let component: OutcomeAchivementListingComponent;
  let fixture: ComponentFixture<OutcomeAchivementListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutcomeAchivementListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutcomeAchivementListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
