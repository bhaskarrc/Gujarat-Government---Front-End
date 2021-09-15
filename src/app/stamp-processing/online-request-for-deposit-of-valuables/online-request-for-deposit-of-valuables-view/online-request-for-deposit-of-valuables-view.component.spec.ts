import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineRequestForDepositOfValuablesViewComponent } from './online-request-for-deposit-of-valuables-view.component';

describe('OnlineRequestForDepositOfValuablesViewComponent', () => {
  let component: OnlineRequestForDepositOfValuablesViewComponent;
  let fixture: ComponentFixture<OnlineRequestForDepositOfValuablesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineRequestForDepositOfValuablesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineRequestForDepositOfValuablesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
