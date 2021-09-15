import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcAuthorizationToViewComponent } from './lc-authorization-to-view.component';

describe('LcAuthorizationToViewComponent', () => {
  let component: LcAuthorizationToViewComponent;
  let fixture: ComponentFixture<LcAuthorizationToViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcAuthorizationToViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcAuthorizationToViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
