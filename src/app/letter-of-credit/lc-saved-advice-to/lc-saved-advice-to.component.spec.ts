import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcSavedAdviceToComponent } from './lc-saved-advice-to.component';

describe('LcSavedAdviceToComponent', () => {
  let component: LcSavedAdviceToComponent;
  let fixture: ComponentFixture<LcSavedAdviceToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcSavedAdviceToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcSavedAdviceToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
