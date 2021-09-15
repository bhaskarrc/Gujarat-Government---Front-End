import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizationOfChallanStoViewComponent } from './authorization-of-challan-sto-view.component';

describe('AuthorizationOfChallanStoViewComponent', () => {
  let component: AuthorizationOfChallanStoViewComponent;
  let fixture: ComponentFixture<AuthorizationOfChallanStoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorizationOfChallanStoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizationOfChallanStoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
