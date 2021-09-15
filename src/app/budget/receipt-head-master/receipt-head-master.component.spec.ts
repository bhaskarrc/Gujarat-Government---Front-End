import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptHeadMasterComponent } from './receipt-head-master.component';

describe('ReceiptHeadMasterComponent', () => {
  let component: ReceiptHeadMasterComponent;
  let fixture: ComponentFixture<ReceiptHeadMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiptHeadMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptHeadMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
