import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmdDepositTransferComponent } from './emd-deposit-transfer.component';

describe('EmdDepositTransferComponent', () => {
  let component: EmdDepositTransferComponent;
  let fixture: ComponentFixture<EmdDepositTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmdDepositTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmdDepositTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
