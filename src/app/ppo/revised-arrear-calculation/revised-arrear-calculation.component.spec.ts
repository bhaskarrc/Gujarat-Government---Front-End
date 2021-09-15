import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisedArrearCalculationComponent } from './revised-arrear-calculation.component';

describe('RevisedArrearCalculationComponent', () => {
  let component: RevisedArrearCalculationComponent;
  let fixture: ComponentFixture<RevisedArrearCalculationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevisedArrearCalculationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisedArrearCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
