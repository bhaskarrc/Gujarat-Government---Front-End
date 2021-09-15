import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountClosingRequestToComponent } from './account-closing-request-to.component';

describe('AccountClosingRequestToComponent', () => {
  let component: AccountClosingRequestToComponent;
  let fixture: ComponentFixture<AccountClosingRequestToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountClosingRequestToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountClosingRequestToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
