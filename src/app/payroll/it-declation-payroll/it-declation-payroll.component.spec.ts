import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItDeclationPayrollComponent } from './it-declation-payroll.component';

describe('ItDeclationPayrollComponent', () => {
  let component: ItDeclationPayrollComponent;
  let fixture: ComponentFixture<ItDeclationPayrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItDeclationPayrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItDeclationPayrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
