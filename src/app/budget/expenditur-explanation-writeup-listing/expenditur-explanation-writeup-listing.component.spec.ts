import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenditurExplanationWriteupListingComponent } from './expenditur-explanation-writeup-listing.component';

describe('ExpenditurExplanationWriteupListingComponent', () => {
  let component: ExpenditurExplanationWriteupListingComponent;
  let fixture: ComponentFixture<ExpenditurExplanationWriteupListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenditurExplanationWriteupListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenditurExplanationWriteupListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
