import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizationOfChallanToViewComponent } from './authorization-of-challan-to-view.component';

describe('AuthorizationOfChallanToViewComponent', () => {
  let component: AuthorizationOfChallanToViewComponent;
  let fixture: ComponentFixture<AuthorizationOfChallanToViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorizationOfChallanToViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizationOfChallanToViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
