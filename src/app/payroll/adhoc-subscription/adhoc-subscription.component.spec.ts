import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdhocSubscriptionComponent } from './adhoc-subscription.component';

describe('AdhocSubscriptionComponent', () => {
  let component: AdhocSubscriptionComponent;
  let fixture: ComponentFixture<AdhocSubscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdhocSubscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdhocSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
