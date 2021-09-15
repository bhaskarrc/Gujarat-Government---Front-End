import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LrParaVerificationRegisterComponent } from './lr-para-verification-register.component';

describe('LrParaVerificationRegisterComponent', () => {
  let component: LrParaVerificationRegisterComponent;
  let fixture: ComponentFixture<LrParaVerificationRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LrParaVerificationRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LrParaVerificationRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
