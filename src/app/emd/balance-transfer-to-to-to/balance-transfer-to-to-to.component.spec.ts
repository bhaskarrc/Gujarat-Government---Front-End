import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceTransferToToToComponent } from './balance-transfer-to-to-to.component';

describe('BalanceTransferToToToComponent', () => {
  let component: BalanceTransferToToToComponent;
  let fixture: ComponentFixture<BalanceTransferToToToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalanceTransferToToToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceTransferToToToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
