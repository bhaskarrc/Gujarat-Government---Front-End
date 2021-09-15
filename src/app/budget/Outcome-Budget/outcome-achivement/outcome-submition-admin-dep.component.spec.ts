import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutcomeSubmitionAdminDepComponent } from './outcome-submition-admin-dep.component';

describe('OutcomeSubmitionAdminDepComponent', () => {
  let component: OutcomeSubmitionAdminDepComponent;
  let fixture: ComponentFixture<OutcomeSubmitionAdminDepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutcomeSubmitionAdminDepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutcomeSubmitionAdminDepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
