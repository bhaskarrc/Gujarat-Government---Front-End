import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcAuthorizationToComponent } from './lc-authorization-to.component';

describe('LcAuthorizationToComponent', () => {
  let component: LcAuthorizationToComponent;
  let fixture: ComponentFixture<LcAuthorizationToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcAuthorizationToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcAuthorizationToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
