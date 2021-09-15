import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpaymentAuthorizeToComponent } from './epayment-authorize-to.component';

describe('EpaymentAuthorizeToComponent', () => {
  let component: EpaymentAuthorizeToComponent;
  let fixture: ComponentFixture<EpaymentAuthorizeToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpaymentAuthorizeToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpaymentAuthorizeToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
