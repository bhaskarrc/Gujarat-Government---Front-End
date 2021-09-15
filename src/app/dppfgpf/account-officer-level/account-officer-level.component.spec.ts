import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountOfficerLevelComponent } from './account-officer-level.component';

describe('AccountOfficerLevelComponent', () => {
  let component: AccountOfficerLevelComponent;
  let fixture: ComponentFixture<AccountOfficerLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountOfficerLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountOfficerLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
