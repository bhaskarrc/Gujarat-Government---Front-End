import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualFinancialStatementListignComponent } from './annual-financial-statement-listign.component';

describe('AnnualFinancialStatementListignComponent', () => {
  let component: AnnualFinancialStatementListignComponent;
  let fixture: ComponentFixture<AnnualFinancialStatementListignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnualFinancialStatementListignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualFinancialStatementListignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
