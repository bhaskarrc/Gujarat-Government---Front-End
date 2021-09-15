import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiEmployeeLedgerComponent } from './gi-employee-ledger.component';

describe('GiEmployeeLedgerComponent', () => {
  let component: GiEmployeeLedgerComponent;
  let fixture: ComponentFixture<GiEmployeeLedgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiEmployeeLedgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiEmployeeLedgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
