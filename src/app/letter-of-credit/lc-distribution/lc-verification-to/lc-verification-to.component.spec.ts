import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcVerificationToComponent } from './lc-verification-to.component';

describe('LcVerificationToComponent', () => {
  let component: LcVerificationToComponent;
  let fixture: ComponentFixture<LcVerificationToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcVerificationToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcVerificationToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
