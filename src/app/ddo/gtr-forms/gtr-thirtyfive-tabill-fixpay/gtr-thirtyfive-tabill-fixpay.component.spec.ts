import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GtrThirtyfiveTabillFixpayComponent } from './gtr-thirtyfive-tabill-fixpay.component';

describe('GtrThirtyfiveTabillFixpayComponent', () => {
  let component: GtrThirtyfiveTabillFixpayComponent;
  let fixture: ComponentFixture<GtrThirtyfiveTabillFixpayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GtrThirtyfiveTabillFixpayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GtrThirtyfiveTabillFixpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
