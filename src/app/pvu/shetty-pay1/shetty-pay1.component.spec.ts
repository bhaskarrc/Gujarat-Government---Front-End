import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShettyPay1Component } from './shetty-pay1.component';

describe('ShettyPay1Component', () => {
  let component: ShettyPay1Component;
  let fixture: ComponentFixture<ShettyPay1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShettyPay1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShettyPay1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
