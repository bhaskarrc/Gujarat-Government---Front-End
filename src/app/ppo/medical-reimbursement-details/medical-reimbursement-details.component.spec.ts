import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalReimbursementDetailsComponent } from './medical-reimbursement-details.component';

describe('MedicalReimbursementDetailsComponent', () => {
  let component: MedicalReimbursementDetailsComponent;
  let fixture: ComponentFixture<MedicalReimbursementDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalReimbursementDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalReimbursementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
