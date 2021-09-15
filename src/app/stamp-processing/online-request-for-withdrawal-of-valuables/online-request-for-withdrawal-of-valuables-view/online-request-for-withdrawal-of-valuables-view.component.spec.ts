import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineRequestForWithdrawalOfValuablesViewComponent } from './online-request-for-withdrawal-of-valuables-view.component';

describe('OnlineRequestForWithdrawalOfValuablesViewComponent', () => {
  let component: OnlineRequestForWithdrawalOfValuablesViewComponent;
  let fixture: ComponentFixture<OnlineRequestForWithdrawalOfValuablesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineRequestForWithdrawalOfValuablesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineRequestForWithdrawalOfValuablesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
