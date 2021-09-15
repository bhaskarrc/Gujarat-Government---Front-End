import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GstFileAccountingAoListingComponent } from './gst-file-accounting-ao-listing.component';

describe('GstFileAccountingAoListingComponent', () => {
  let component: GstFileAccountingAoListingComponent;
  let fixture: ComponentFixture<GstFileAccountingAoListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GstFileAccountingAoListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GstFileAccountingAoListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
