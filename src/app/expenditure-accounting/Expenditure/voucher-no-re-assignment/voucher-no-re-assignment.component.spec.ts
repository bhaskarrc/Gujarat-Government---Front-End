import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoucherNoReAssignmentComponent } from './voucher-no-re-assignment.component';

describe('VoucherNoReAssignmentComponent', () => {
  let component: VoucherNoReAssignmentComponent;
  let fixture: ComponentFixture<VoucherNoReAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoucherNoReAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoucherNoReAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
