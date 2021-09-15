import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntitlementOfPayComponent } from './entitlement-of-pay.component';

describe('EntitlementOfPayComponent', () => {
  let component: EntitlementOfPayComponent;
  let fixture: ComponentFixture<EntitlementOfPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntitlementOfPayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntitlementOfPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
