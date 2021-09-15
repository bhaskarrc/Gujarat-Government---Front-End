import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineDiarySubmissionListingComponent } from './online-diary-submission-listing.component';

describe('OnlineDiarySubmissionListingComponent', () => {
  let component: OnlineDiarySubmissionListingComponent;
  let fixture: ComponentFixture<OnlineDiarySubmissionListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineDiarySubmissionListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineDiarySubmissionListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
