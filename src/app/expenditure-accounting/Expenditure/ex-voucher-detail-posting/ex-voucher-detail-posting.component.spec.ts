import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExVoucherDetailPostingComponent } from './ex-voucher-detail-posting.component';

describe('ExVoucherDetailPostingComponent', () => {
  let component: ExVoucherDetailPostingComponent;
  let fixture: ComponentFixture<ExVoucherDetailPostingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExVoucherDetailPostingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExVoucherDetailPostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
