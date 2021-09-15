import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountClosingRequestComponent } from './account-closing-request.component';

describe('AccountClosingRequestComponent', () => {
  let component: AccountClosingRequestComponent;
  let fixture: ComponentFixture<AccountClosingRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountClosingRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountClosingRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
