import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpsDdoSideWithdrawalPrintComponent } from './nps-ddo-side-withdrawal-print.component';

describe('NpsDdoSideWithdrawalPrintComponent', () => {
  let component: NpsDdoSideWithdrawalPrintComponent;
  let fixture: ComponentFixture<NpsDdoSideWithdrawalPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpsDdoSideWithdrawalPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpsDdoSideWithdrawalPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
