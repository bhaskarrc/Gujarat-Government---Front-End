import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcAdviceInformationAuthorizationComponent } from './lc-advice-information-authorization.component';

describe('LcAdviceInformationAuthorizationComponent', () => {
  let component: LcAdviceInformationAuthorizationComponent;
  let fixture: ComponentFixture<LcAdviceInformationAuthorizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcAdviceInformationAuthorizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcAdviceInformationAuthorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
