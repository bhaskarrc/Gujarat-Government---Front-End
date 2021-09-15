import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestCalculationOutputComponent } from './interest-calculation-output.component';

describe('InterestCalculationOutputComponent', () => {
  let component: InterestCalculationOutputComponent;
  let fixture: ComponentFixture<InterestCalculationOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestCalculationOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestCalculationOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
