import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountOfficerSavedCasesComponent } from './account-officer-saved-cases.component';

describe('AccountOfficerSavedCasesComponent', () => {
  let component: AccountOfficerSavedCasesComponent;
  let fixture: ComponentFixture<AccountOfficerSavedCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountOfficerSavedCasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountOfficerSavedCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
