import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountTransferHbaComponent } from './account-transfer-hba.component';

describe('AccountTransferHbaComponent', () => {
  let component: AccountTransferHbaComponent;
  let fixture: ComponentFixture<AccountTransferHbaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountTransferHbaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountTransferHbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
