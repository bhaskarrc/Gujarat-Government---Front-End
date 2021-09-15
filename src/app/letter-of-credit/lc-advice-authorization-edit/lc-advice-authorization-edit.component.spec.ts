import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcAdviceAuthorizationEditComponent } from './lc-advice-authorization-edit.component';

describe('LcAdviceAuthorizationEditComponent', () => {
  let component: LcAdviceAuthorizationEditComponent;
  let fixture: ComponentFixture<LcAdviceAuthorizationEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcAdviceAuthorizationEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcAdviceAuthorizationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
