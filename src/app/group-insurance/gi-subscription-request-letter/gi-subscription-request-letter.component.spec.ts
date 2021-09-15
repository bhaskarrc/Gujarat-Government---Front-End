import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiSubscriptionRequestLetterComponent } from './gi-subscription-request-letter.component';

describe('GiSubscriptionRequestLetterComponent', () => {
  let component: GiSubscriptionRequestLetterComponent;
  let fixture: ComponentFixture<GiSubscriptionRequestLetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiSubscriptionRequestLetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiSubscriptionRequestLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
