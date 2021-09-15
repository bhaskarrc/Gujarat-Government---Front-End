import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutcomeAnnualTargetsComponent } from './outcome-annual-targets.component';

describe('OutcomeAnnualTargetsComponent', () => {
  let component: OutcomeAnnualTargetsComponent;
  let fixture: ComponentFixture<OutcomeAnnualTargetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutcomeAnnualTargetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutcomeAnnualTargetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
