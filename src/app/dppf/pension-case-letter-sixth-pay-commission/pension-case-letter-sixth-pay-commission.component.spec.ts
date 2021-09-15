import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PensionCaseLetterSixthPayCommissionComponent } from './pension-case-letter-sixth-pay-commission.component';

describe('PensionCaseLetterSixthPayCommissionComponent', () => {
  let component: PensionCaseLetterSixthPayCommissionComponent;
  let fixture: ComponentFixture<PensionCaseLetterSixthPayCommissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PensionCaseLetterSixthPayCommissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PensionCaseLetterSixthPayCommissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
