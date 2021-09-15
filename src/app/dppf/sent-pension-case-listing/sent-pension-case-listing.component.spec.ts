import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentPensionCaseListingComponent } from './sent-pension-case-listing.component';

describe('SentPensionCaseListingComponent', () => {
  let component: SentPensionCaseListingComponent;
  let fixture: ComponentFixture<SentPensionCaseListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentPensionCaseListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentPensionCaseListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
