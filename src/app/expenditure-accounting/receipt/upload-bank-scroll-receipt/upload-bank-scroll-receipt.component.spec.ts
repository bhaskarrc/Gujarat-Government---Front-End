import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadBankScrollReceiptComponent } from './upload-bank-scroll-receipt.component';

describe('UploadBankScrollReceiptComponent', () => {
  let component: UploadBankScrollReceiptComponent;
  let fixture: ComponentFixture<UploadBankScrollReceiptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadBankScrollReceiptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadBankScrollReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
