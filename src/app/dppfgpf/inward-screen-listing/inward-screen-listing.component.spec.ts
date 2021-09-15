import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InwardScreenListingComponent } from './inward-screen-listing.component';

describe('InwardScreenListingComponent', () => {
  let component: InwardScreenListingComponent;
  let fixture: ComponentFixture<InwardScreenListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InwardScreenListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InwardScreenListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
