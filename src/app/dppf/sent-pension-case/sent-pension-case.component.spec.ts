import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentPensionCaseComponent } from './sent-pension-case.component';

describe('SentPensionCaseComponent', () => {
  let component: SentPensionCaseComponent;
  let fixture: ComponentFixture<SentPensionCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentPensionCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentPensionCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
