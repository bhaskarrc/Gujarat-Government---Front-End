import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpaymentInCustodyComponent } from './epayment-in-custody.component';

describe('EpaymentInCustodyComponent', () => {
  let component: EpaymentInCustodyComponent;
  let fixture: ComponentFixture<EpaymentInCustodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpaymentInCustodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpaymentInCustodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
