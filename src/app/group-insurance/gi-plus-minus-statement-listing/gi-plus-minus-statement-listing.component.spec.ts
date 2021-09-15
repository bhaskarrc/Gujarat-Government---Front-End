import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiPlusMinusStatementListingComponent } from './gi-plus-minus-statement-listing.component';

describe('GiPlusMinusStatementListingComponent', () => {
  let component: GiPlusMinusStatementListingComponent;
  let fixture: ComponentFixture<GiPlusMinusStatementListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiPlusMinusStatementListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiPlusMinusStatementListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
