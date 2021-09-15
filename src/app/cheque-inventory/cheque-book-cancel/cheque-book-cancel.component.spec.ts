import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeBookCancelComponent } from './cheque-book-cancel.component';

describe('ChequeBookCancelComponent', () => {
  let component: ChequeBookCancelComponent;
  let fixture: ComponentFixture<ChequeBookCancelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChequeBookCancelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChequeBookCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
