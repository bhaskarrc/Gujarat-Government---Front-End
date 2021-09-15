import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntitlementPayComponent } from './entitlement-pay.component';

describe('EntitlementPayComponent', () => {
  let component: EntitlementPayComponent;
  let fixture: ComponentFixture<EntitlementPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntitlementPayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntitlementPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
