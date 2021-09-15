import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineRequestForDepositOfValuablesComponent } from './online-request-for-deposit-of-valuables.component';

describe('OnlineRequestForDepositOfValuablesComponent', () => {
  let component: OnlineRequestForDepositOfValuablesComponent;
  let fixture: ComponentFixture<OnlineRequestForDepositOfValuablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineRequestForDepositOfValuablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineRequestForDepositOfValuablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
