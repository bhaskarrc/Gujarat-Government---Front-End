import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NdcReqListingComponent } from './ndc-req-listing.component';

describe('NdcReqListingComponent', () => {
  let component: NdcReqListingComponent;
  let fixture: ComponentFixture<NdcReqListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NdcReqListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NdcReqListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
