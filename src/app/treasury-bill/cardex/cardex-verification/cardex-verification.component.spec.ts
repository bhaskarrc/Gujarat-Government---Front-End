import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardexVerificationComponent } from './cardex-verification.component';

describe('CardexVerificationComponent', () => {
  let component: CardexVerificationComponent;
  let fixture: ComponentFixture<CardexVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardexVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardexVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
