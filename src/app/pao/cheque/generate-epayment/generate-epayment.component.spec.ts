import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateEpaymentComponent } from './generate-epayment.component';

describe('GenerateEpaymentComponent', () => {
  let component: GenerateEpaymentComponent;
  let fixture: ComponentFixture<GenerateEpaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateEpaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateEpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
