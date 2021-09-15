import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExChequeReconciliationComponent } from './ex-cheque-reconciliation.component';

describe('ExChequeReconciliationComponent', () => {
  let component: ExChequeReconciliationComponent;
  let fixture: ComponentFixture<ExChequeReconciliationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExChequeReconciliationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExChequeReconciliationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
