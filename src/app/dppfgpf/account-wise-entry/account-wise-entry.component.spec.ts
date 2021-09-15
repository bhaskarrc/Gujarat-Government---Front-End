import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountWiseEntryComponent } from './account-wise-entry.component';

describe('AccountWiseEntryComponent', () => {
  let component: AccountWiseEntryComponent;
  let fixture: ComponentFixture<AccountWiseEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountWiseEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountWiseEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
