import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpaymentAutorizeToDetailsComponent } from './epayment-autorize-to-details.component';

describe('EpaymentAutorizeToDetailsComponent', () => {
  let component: EpaymentAutorizeToDetailsComponent;
  let fixture: ComponentFixture<EpaymentAutorizeToDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpaymentAutorizeToDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpaymentAutorizeToDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
