import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiasonOfficerVoucherEntryComponent } from './liason-officer-voucher-entry.component';

describe('LiasonOfficerVoucherEntryComponent', () => {
  let component: LiasonOfficerVoucherEntryComponent;
  let fixture: ComponentFixture<LiasonOfficerVoucherEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiasonOfficerVoucherEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiasonOfficerVoucherEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
