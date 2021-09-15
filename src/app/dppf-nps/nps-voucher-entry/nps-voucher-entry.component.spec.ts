import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpsVoucherEntryComponent } from './nps-voucher-entry.component';

describe('NpsVoucherEntryComponent', () => {
  let component: NpsVoucherEntryComponent;
  let fixture: ComponentFixture<NpsVoucherEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpsVoucherEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpsVoucherEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
