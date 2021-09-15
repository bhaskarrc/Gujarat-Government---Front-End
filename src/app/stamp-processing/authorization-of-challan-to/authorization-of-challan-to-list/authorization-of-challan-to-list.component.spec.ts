import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizationOfChallanToListComponent } from './authorization-of-challan-to-list.component';

describe('AuthorizationOfChallanToListComponent', () => {
  let component: AuthorizationOfChallanToListComponent;
  let fixture: ComponentFixture<AuthorizationOfChallanToListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorizationOfChallanToListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizationOfChallanToListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
