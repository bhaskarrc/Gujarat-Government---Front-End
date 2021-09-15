import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillReturnedByDdoApproverComponent } from './bill-returned-by-ddo-approver.component';

describe('BillReturnedByDdoApproverComponent', () => {
  let component: BillReturnedByDdoApproverComponent;
  let fixture: ComponentFixture<BillReturnedByDdoApproverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillReturnedByDdoApproverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillReturnedByDdoApproverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
