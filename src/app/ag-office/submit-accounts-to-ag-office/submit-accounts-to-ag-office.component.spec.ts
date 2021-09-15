import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitAccountsToAgOfficeComponent } from './submit-accounts-to-ag-office.component';

describe('SubmitAccountsToAgOfficeComponent', () => {
  let component: SubmitAccountsToAgOfficeComponent;
  let fixture: ComponentFixture<SubmitAccountsToAgOfficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitAccountsToAgOfficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitAccountsToAgOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
