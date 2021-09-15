import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundRequestAdministratorComponent } from './refund-request-administrator.component';

describe('RefundRequestAdministratorComponent', () => {
  let component: RefundRequestAdministratorComponent;
  let fixture: ComponentFixture<RefundRequestAdministratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefundRequestAdministratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundRequestAdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
