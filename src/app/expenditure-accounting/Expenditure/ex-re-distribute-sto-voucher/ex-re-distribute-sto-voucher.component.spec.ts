import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExReDistributeStoVoucherComponent } from './ex-re-distribute-sto-voucher.component';

describe('ExReDistributeStoVoucherComponent', () => {
  let component: ExReDistributeStoVoucherComponent;
  let fixture: ComponentFixture<ExReDistributeStoVoucherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExReDistributeStoVoucherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExReDistributeStoVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
