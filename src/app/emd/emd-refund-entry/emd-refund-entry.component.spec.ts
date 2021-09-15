import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmdRefundEntryComponent } from './emd-refund-entry.component';

describe('EmdRefundEntryComponent', () => {
  let component: EmdRefundEntryComponent;
  let fixture: ComponentFixture<EmdRefundEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmdRefundEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmdRefundEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
