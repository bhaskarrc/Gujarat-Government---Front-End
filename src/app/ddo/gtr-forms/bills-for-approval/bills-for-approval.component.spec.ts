import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillsForApprovalComponent } from './bills-for-approval.component';

describe('BillsForApprovalComponent', () => {
  let component: BillsForApprovalComponent;
  let fixture: ComponentFixture<BillsForApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillsForApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillsForApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
