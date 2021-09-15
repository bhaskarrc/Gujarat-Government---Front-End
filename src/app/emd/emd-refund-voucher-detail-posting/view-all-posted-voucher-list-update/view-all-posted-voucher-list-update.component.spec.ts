import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllPostedVoucherListUpdateComponent } from './view-all-posted-voucher-list-update.component';

describe('ViewAllPostedVoucherListUpdateComponent', () => {
  let component: ViewAllPostedVoucherListUpdateComponent;
  let fixture: ComponentFixture<ViewAllPostedVoucherListUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllPostedVoucherListUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllPostedVoucherListUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
