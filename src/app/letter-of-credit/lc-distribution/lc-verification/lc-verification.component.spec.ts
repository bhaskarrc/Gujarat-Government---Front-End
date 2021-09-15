import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcVerificationComponent } from './lc-verification.component';

describe('LcVerificationComponent', () => {
  let component: LcVerificationComponent;
  let fixture: ComponentFixture<LcVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
