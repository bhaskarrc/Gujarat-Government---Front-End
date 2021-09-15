import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExVoucherDetailPostingUpdateComponent } from './ex-voucher-detail-posting-update.component';

describe('ExVoucherDetailPostingUpdateComponent', () => {
  let component: ExVoucherDetailPostingUpdateComponent;
  let fixture: ComponentFixture<ExVoucherDetailPostingUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExVoucherDetailPostingUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExVoucherDetailPostingUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
