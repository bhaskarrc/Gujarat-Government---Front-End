import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdviceVerificationToComponent } from './advice-verification-to.component';

describe('AdviceVerificationToComponent', () => {
  let component: AdviceVerificationToComponent;
  let fixture: ComponentFixture<AdviceVerificationToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdviceVerificationToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdviceVerificationToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
