import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PensionCaseLetterComponent } from './pension-case-letter.component';

describe('PensionCaseLetterComponent', () => {
  let component: PensionCaseLetterComponent;
  let fixture: ComponentFixture<PensionCaseLetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PensionCaseLetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PensionCaseLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
