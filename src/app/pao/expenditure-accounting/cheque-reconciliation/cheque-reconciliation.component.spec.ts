import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeReconciliationComponent } from './cheque-reconciliation.component';

describe('ChequeReconciliationComponent', () => {
  let component: ChequeReconciliationComponent;
  let fixture: ComponentFixture<ChequeReconciliationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChequeReconciliationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChequeReconciliationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
