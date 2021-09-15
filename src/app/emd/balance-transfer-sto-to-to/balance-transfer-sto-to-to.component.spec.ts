import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceTransferStoToToComponent } from './balance-transfer-sto-to-to.component';

describe('BalanceTransferStoToToComponent', () => {
  let component: BalanceTransferStoToToComponent;
  let fixture: ComponentFixture<BalanceTransferStoToToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalanceTransferStoToToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceTransferStoToToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
