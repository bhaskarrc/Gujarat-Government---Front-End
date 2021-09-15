import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutwardListingComponent } from './outward-listing.component';

describe('OutwardListingComponent', () => {
  let component: OutwardListingComponent;
  let fixture: ComponentFixture<OutwardListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutwardListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutwardListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
