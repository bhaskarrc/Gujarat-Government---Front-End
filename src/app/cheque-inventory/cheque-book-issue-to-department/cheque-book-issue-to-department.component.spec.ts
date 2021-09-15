import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeBookIssueToDepartmentComponent } from './cheque-book-issue-to-department.component';

describe('ChequeBookIssueToDepartmentComponent', () => {
  let component: ChequeBookIssueToDepartmentComponent;
  let fixture: ComponentFixture<ChequeBookIssueToDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChequeBookIssueToDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChequeBookIssueToDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
