import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadBankScrollPaymentComponent } from './upload-bank-scroll-payment.component';

describe('UploadBankScrollPaymentComponent', () => {
  let component: UploadBankScrollPaymentComponent;
  let fixture: ComponentFixture<UploadBankScrollPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadBankScrollPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadBankScrollPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
