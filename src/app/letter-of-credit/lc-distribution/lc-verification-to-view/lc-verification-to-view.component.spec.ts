import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcVerificationToViewComponent } from './lc-verification-to-view.component';

describe('LcVerificationToViewComponent', () => {
  let component: LcVerificationToViewComponent;
  let fixture: ComponentFixture<LcVerificationToViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcVerificationToViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcVerificationToViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
