import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GtrCourtFeeRefundComponent } from './gtr-court-fee-refund.component';

describe('GtrCourtFeeRefundComponent', () => {
  let component: GtrCourtFeeRefundComponent;
  let fixture: ComponentFixture<GtrCourtFeeRefundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GtrCourtFeeRefundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GtrCourtFeeRefundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
