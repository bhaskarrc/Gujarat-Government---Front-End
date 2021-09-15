import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiExpenditureStatementComponent } from './gi-expenditure-statement.component';

describe('GiExpenditureStatementComponent', () => {
  let component: GiExpenditureStatementComponent;
  let fixture: ComponentFixture<GiExpenditureStatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiExpenditureStatementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiExpenditureStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
