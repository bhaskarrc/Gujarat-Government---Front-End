import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpaymentAuthorizeDdoComponent } from './epayment-authorize-ddo.component';

describe('EpaymentAuthorizeDdoComponent', () => {
  let component: EpaymentAuthorizeDdoComponent;
  let fixture: ComponentFixture<EpaymentAuthorizeDdoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpaymentAuthorizeDdoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpaymentAuthorizeDdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
