import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiSubscriptionRequestLetterPrintComponent } from './gi-subscription-request-letter-print.component';

describe('GiSubscriptionRequestLetterPrintComponent', () => {
  let component: GiSubscriptionRequestLetterPrintComponent;
  let fixture: ComponentFixture<GiSubscriptionRequestLetterPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiSubscriptionRequestLetterPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiSubscriptionRequestLetterPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
