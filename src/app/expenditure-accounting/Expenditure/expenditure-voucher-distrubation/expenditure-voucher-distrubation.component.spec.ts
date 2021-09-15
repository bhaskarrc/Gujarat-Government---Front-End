import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenditureVoucherDistrubationComponent } from './expenditure-voucher-distrubation.component';

describe('ExpenditureVoucherDistrubationComponent', () => {
  let component: ExpenditureVoucherDistrubationComponent;
  let fixture: ComponentFixture<ExpenditureVoucherDistrubationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenditureVoucherDistrubationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenditureVoucherDistrubationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
