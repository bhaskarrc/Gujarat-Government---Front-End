import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdviceVerificationAuditorComponent } from './advice-verification-auditor.component';

describe('AdviceVerificationAuditorComponent', () => {
  let component: AdviceVerificationAuditorComponent;
  let fixture: ComponentFixture<AdviceVerificationAuditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdviceVerificationAuditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdviceVerificationAuditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
