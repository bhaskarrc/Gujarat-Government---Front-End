import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountStatusHbaComponent } from './account-status-hba.component';

describe('AccountStatusHbaComponent', () => {
  let component: AccountStatusHbaComponent;
  let fixture: ComponentFixture<AccountStatusHbaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountStatusHbaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountStatusHbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
