import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptExpenditureScreenEightSixFiveEightComponent } from './receipt-expenditure-screen-eight-six-five-eight.component';

describe('ReceiptExpenditureScreenEightSixFiveEightComponent', () => {
  let component: ReceiptExpenditureScreenEightSixFiveEightComponent;
  let fixture: ComponentFixture<ReceiptExpenditureScreenEightSixFiveEightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiptExpenditureScreenEightSixFiveEightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptExpenditureScreenEightSixFiveEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
