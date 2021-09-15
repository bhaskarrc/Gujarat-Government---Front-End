import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpaymentAutorizeDdoDetailsComponent } from './epayment-autorize-ddo-details.component';

describe('EpaymentAutorizeDdoDetailsComponent', () => {
  let component: EpaymentAutorizeDdoDetailsComponent;
  let fixture: ComponentFixture<EpaymentAutorizeDdoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpaymentAutorizeDdoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpaymentAutorizeDdoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
