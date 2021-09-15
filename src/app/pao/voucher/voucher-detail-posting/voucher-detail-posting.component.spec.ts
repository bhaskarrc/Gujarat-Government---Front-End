import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoucherDetailPostingComponent } from './voucher-detail-posting.component';

describe('VoucherDetailPostingComponent', () => {
  let component: VoucherDetailPostingComponent;
  let fixture: ComponentFixture<VoucherDetailPostingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoucherDetailPostingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoucherDetailPostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
