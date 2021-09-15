import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadBankScrollReceiptListComponent } from './upload-bank-scroll-receipt-list.component';

describe('UploadBankScrollReceiptListComponent', () => {
  let component: UploadBankScrollReceiptListComponent;
  let fixture: ComponentFixture<UploadBankScrollReceiptListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadBankScrollReceiptListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadBankScrollReceiptListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
