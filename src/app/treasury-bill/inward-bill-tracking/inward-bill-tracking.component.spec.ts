import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InwardBillTrackingComponent } from './inward-bill-tracking.component';

describe('InwardBillTrackingComponent', () => {
  let component: InwardBillTrackingComponent;
  let fixture: ComponentFixture<InwardBillTrackingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InwardBillTrackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InwardBillTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
