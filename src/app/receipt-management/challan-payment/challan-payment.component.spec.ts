import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallanPaymentComponent } from './challan-payment.component';

describe('ChallanPaymentComponent', () => {
  let component: ChallanPaymentComponent;
  let fixture: ComponentFixture<ChallanPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallanPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallanPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
