import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountClosingRequestDatComponent } from './account-closing-request-dat.component';

describe('AccountClosingRequestDatComponent', () => {
  let component: AccountClosingRequestDatComponent;
  let fixture: ComponentFixture<AccountClosingRequestDatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountClosingRequestDatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountClosingRequestDatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
