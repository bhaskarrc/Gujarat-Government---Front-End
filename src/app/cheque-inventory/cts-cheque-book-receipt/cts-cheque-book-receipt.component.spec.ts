import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtsChequeBookReceiptComponent } from './cts-cheque-book-receipt.component';

describe('CtsChequeBookReceiptComponent', () => {
  let component: CtsChequeBookReceiptComponent;
  let fixture: ComponentFixture<CtsChequeBookReceiptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtsChequeBookReceiptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtsChequeBookReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
