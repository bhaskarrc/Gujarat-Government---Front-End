import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevertIssuedChequeBookComponent } from './revert-issued-cheque-book.component';

describe('RevertIssuedChequeBookComponent', () => {
  let component: RevertIssuedChequeBookComponent;
  let fixture: ComponentFixture<RevertIssuedChequeBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevertIssuedChequeBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevertIssuedChequeBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
