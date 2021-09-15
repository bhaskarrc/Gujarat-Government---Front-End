import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizationOfChallanToComponent } from './authorization-of-challan-to.component';

describe('AuthorizationOfChallanToComponent', () => {
  let component: AuthorizationOfChallanToComponent;
  let fixture: ComponentFixture<AuthorizationOfChallanToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorizationOfChallanToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizationOfChallanToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
