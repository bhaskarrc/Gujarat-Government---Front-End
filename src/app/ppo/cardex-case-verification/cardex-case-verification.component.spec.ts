import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardexCaseVerificationComponent } from './cardex-case-verification.component';

describe('CardexCaseVerificationComponent', () => {
  let component: CardexCaseVerificationComponent;
  let fixture: ComponentFixture<CardexCaseVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardexCaseVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardexCaseVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
