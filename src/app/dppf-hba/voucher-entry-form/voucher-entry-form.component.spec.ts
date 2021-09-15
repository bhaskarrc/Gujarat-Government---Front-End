import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoucherEntryFormComponent } from './voucher-entry-form.component';

describe('VoucherEntryFormComponent', () => {
  let component: VoucherEntryFormComponent;
  let fixture: ComponentFixture<VoucherEntryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoucherEntryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoucherEntryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
