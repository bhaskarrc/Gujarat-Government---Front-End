import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcAuthorizationToEditComponent } from './lc-authorization-to-edit.component';

describe('LcAuthorizationToEditComponent', () => {
  let component: LcAuthorizationToEditComponent;
  let fixture: ComponentFixture<LcAuthorizationToEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcAuthorizationToEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcAuthorizationToEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
