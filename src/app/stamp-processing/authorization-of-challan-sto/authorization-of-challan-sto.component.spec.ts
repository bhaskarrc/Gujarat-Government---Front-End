import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizationOfChallanStoComponent } from './authorization-of-challan-sto.component';

describe('AuthorizationOfChallanStoComponent', () => {
  let component: AuthorizationOfChallanStoComponent;
  let fixture: ComponentFixture<AuthorizationOfChallanStoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorizationOfChallanStoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizationOfChallanStoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
