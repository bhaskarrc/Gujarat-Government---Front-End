import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountWiseHbaComponent } from './account-wise-hba.component';

describe('AccountWiseHbaComponent', () => {
  let component: AccountWiseHbaComponent;
  let fixture: ComponentFixture<AccountWiseHbaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountWiseHbaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountWiseHbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
