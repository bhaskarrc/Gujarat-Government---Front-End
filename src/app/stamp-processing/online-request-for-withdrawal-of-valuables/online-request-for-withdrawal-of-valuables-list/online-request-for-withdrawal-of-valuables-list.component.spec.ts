import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineRequestForWithdrawalOfValuablesListComponent } from './online-request-for-withdrawal-of-valuables-list.component';

describe('OnlineRequestForWithdrawalOfValuablesListComponent', () => {
  let component: OnlineRequestForWithdrawalOfValuablesListComponent;
  let fixture: ComponentFixture<OnlineRequestForWithdrawalOfValuablesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineRequestForWithdrawalOfValuablesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineRequestForWithdrawalOfValuablesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
