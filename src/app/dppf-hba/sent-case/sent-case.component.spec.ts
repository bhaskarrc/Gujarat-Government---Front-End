import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentCaseComponent } from './sent-case.component';

describe('SentCaseComponent', () => {
  let component: SentCaseComponent;
  let fixture: ComponentFixture<SentCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
