import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignatureVerificationComponent } from './signature-verification.component';

describe('SignatureVerificationComponent', () => {
  let component: SignatureVerificationComponent;
  let fixture: ComponentFixture<SignatureVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignatureVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignatureVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
