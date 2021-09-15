import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpfInterestCalculationComponent } from './gpf-interest-calculation.component';

describe('GpfInterestCalculationComponent', () => {
  let component: GpfInterestCalculationComponent;
  let fixture: ComponentFixture<GpfInterestCalculationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpfInterestCalculationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpfInterestCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
