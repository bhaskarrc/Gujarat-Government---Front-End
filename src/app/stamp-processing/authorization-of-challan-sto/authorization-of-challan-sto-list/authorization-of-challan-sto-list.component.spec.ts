import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizationOfChallanStoListComponent } from './authorization-of-challan-sto-list.component';

describe('AuthorizationOfChallanStoListComponent', () => {
  let component: AuthorizationOfChallanStoListComponent;
  let fixture: ComponentFixture<AuthorizationOfChallanStoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorizationOfChallanStoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizationOfChallanStoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
