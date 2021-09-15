import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountAdjustmentDetailComponent } from './account-adjustment-detail.component';

describe('AccountAdjustmentDetailComponent', () => {
  let component: AccountAdjustmentDetailComponent;
  let fixture: ComponentFixture<AccountAdjustmentDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountAdjustmentDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountAdjustmentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
