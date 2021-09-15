import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherChequeIssueListComponent } from './other-cheque-issue-list.component';

describe('OtherChequeIssueListComponent', () => {
  let component: OtherChequeIssueListComponent;
  let fixture: ComponentFixture<OtherChequeIssueListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherChequeIssueListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherChequeIssueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
