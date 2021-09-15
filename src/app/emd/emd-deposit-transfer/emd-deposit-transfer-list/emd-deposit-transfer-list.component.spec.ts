import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmdDepositTransferListComponent } from './emd-deposit-transfer-list.component';

describe('EmdDepositTransferListComponent', () => {
  let component: EmdDepositTransferListComponent;
  let fixture: ComponentFixture<EmdDepositTransferListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmdDepositTransferListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmdDepositTransferListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
