import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InwardListingComponent } from './inward-listing.component';

describe('InwardListingComponent', () => {
  let component: InwardListingComponent;
  let fixture: ComponentFixture<InwardListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InwardListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InwardListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
