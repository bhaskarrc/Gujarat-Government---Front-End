import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllPostedVoucherComponent } from './view-all-posted-voucher.component';

describe('ViewAllPostedVoucherComponent', () => {
  let component: ViewAllPostedVoucherComponent;
  let fixture: ComponentFixture<ViewAllPostedVoucherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllPostedVoucherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllPostedVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
