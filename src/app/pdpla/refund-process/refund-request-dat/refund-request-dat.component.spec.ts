import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundRequestDatComponent } from './refund-request-dat.component';

describe('RefundRequestDatComponent', () => {
  let component: RefundRequestDatComponent;
  let fixture: ComponentFixture<RefundRequestDatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefundRequestDatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundRequestDatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
