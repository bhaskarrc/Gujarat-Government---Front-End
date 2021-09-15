import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherChequeIssueComponent } from './other-cheque-issue.component';

describe('OtherChequeIssueComponent', () => {
  let component: OtherChequeIssueComponent;
  let fixture: ComponentFixture<OtherChequeIssueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherChequeIssueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherChequeIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
