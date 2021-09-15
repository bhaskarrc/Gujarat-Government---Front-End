import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallanPostingReceiptComponent } from './challan-posting-receipt.component';

describe('ChallanPostingReceiptComponent', () => {
  let component: ChallanPostingReceiptComponent;
  let fixture: ComponentFixture<ChallanPostingReceiptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallanPostingReceiptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallanPostingReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
