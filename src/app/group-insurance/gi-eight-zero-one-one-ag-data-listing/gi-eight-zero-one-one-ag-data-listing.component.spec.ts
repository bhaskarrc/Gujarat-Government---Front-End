import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiEightZeroOneOneAgDataListingComponent } from './gi-eight-zero-one-one-ag-data-listing.component';

describe('GiEightZeroOneOneAgDataListingComponent', () => {
  let component: GiEightZeroOneOneAgDataListingComponent;
  let fixture: ComponentFixture<GiEightZeroOneOneAgDataListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiEightZeroOneOneAgDataListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiEightZeroOneOneAgDataListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
