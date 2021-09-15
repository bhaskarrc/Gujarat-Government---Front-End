import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceTransferToToStoComponent } from './balance-transfer-to-to-sto.component';

describe('BalanceTransferToToStoComponent', () => {
  let component: BalanceTransferToToStoComponent;
  let fixture: ComponentFixture<BalanceTransferToToStoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalanceTransferToToStoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceTransferToToStoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
