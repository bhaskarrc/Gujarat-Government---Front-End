import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineRequestForDepositOfValuablesListComponent } from './online-request-for-deposit-of-valuables-list.component';

describe('OnlineRequestForDepositOfValuablesListComponent', () => {
  let component: OnlineRequestForDepositOfValuablesListComponent;
  let fixture: ComponentFixture<OnlineRequestForDepositOfValuablesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineRequestForDepositOfValuablesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineRequestForDepositOfValuablesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
