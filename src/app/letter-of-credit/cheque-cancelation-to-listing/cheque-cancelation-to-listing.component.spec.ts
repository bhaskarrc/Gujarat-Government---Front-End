import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeCancelationToListingComponent } from './cheque-cancelation-to-listing.component';

describe('ChequeCancelationToListingComponent', () => {
  let component: ChequeCancelationToListingComponent;
  let fixture: ComponentFixture<ChequeCancelationToListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChequeCancelationToListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChequeCancelationToListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
