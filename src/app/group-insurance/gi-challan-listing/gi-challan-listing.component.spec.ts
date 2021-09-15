import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiChallanListingComponent } from './gi-challan-listing.component';

describe('GiChallanListingComponent', () => {
  let component: GiChallanListingComponent;
  let fixture: ComponentFixture<GiChallanListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiChallanListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiChallanListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
