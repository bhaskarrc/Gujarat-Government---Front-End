import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountEntryWiseComponent } from './account-entry-wise.component';

describe('AccountEntryWiseComponent', () => {
  let component: AccountEntryWiseComponent;
  let fixture: ComponentFixture<AccountEntryWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountEntryWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountEntryWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
