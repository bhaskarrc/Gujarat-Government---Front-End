import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GstFileAccountingHaListingComponent } from './gst-file-accounting-ha-listing.component';

describe('GstFileAccountingHaListingComponent', () => {
  let component: GstFileAccountingHaListingComponent;
  let fixture: ComponentFixture<GstFileAccountingHaListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GstFileAccountingHaListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GstFileAccountingHaListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
