import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiEmployeeLedgerAisComponent } from './gi-employee-ledger-ais.component';

describe('GiEmployeeLedgerAisComponent', () => {
  let component: GiEmployeeLedgerAisComponent;
  let fixture: ComponentFixture<GiEmployeeLedgerAisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiEmployeeLedgerAisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiEmployeeLedgerAisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
