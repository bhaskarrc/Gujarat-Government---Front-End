import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadBankScrollPaymentListComponent } from './upload-bank-scroll-payment-list.component';

describe('UploadBankScrollPaymentListComponent', () => {
  let component: UploadBankScrollPaymentListComponent;
  let fixture: ComponentFixture<UploadBankScrollPaymentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadBankScrollPaymentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadBankScrollPaymentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
