import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpaymentCancellationToComponent } from './epayment-cancellation-to.component';

describe('EpaymentCancellationToComponent', () => {
  let component: EpaymentCancellationToComponent;
  let fixture: ComponentFixture<EpaymentCancellationToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpaymentCancellationToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpaymentCancellationToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
