import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearlyIndentRequestListingComponent } from './yearly-indent-request-listing.component';

describe('YearlyIndentRequestListingComponent', () => {
  let component: YearlyIndentRequestListingComponent;
  let fixture: ComponentFixture<YearlyIndentRequestListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearlyIndentRequestListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearlyIndentRequestListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
