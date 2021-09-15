import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntitlementOfHraComponent } from './entitlement-of-hra.component';

describe('EntitlementOfHraComponent', () => {
  let component: EntitlementOfHraComponent;
  let fixture: ComponentFixture<EntitlementOfHraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntitlementOfHraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntitlementOfHraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
