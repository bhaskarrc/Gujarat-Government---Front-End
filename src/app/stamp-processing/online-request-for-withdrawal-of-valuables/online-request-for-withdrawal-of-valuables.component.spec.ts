import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineRequestForWithdrawalOfValuablesComponent } from './online-request-for-withdrawal-of-valuables.component';

describe('OnlineRequestForWithdrawalOfValuablesComponent', () => {
  let component: OnlineRequestForWithdrawalOfValuablesComponent;
  let fixture: ComponentFixture<OnlineRequestForWithdrawalOfValuablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineRequestForWithdrawalOfValuablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineRequestForWithdrawalOfValuablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
