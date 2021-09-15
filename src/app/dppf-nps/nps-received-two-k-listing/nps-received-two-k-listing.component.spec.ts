import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpsReceivedTwoKListingComponent } from './nps-received-two-k-listing.component';

describe('NpsReceivedTwoKListingComponent', () => {
  let component: NpsReceivedTwoKListingComponent;
  let fixture: ComponentFixture<NpsReceivedTwoKListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpsReceivedTwoKListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpsReceivedTwoKListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
