import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedApprovedBillsByCoComponent } from './rejected-approved-bills-by-co.component';

describe('RejectedApprovedBillsByCoComponent', () => {
  let component: RejectedApprovedBillsByCoComponent;
  let fixture: ComponentFixture<RejectedApprovedBillsByCoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejectedApprovedBillsByCoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectedApprovedBillsByCoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
