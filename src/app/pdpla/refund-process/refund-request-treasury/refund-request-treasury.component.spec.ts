import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundRequestTreasuryComponent } from './refund-request-treasury.component';

describe('RefundRequestTreasuryComponent', () => {
  let component: RefundRequestTreasuryComponent;
  let fixture: ComponentFixture<RefundRequestTreasuryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefundRequestTreasuryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundRequestTreasuryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
