import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallanPreparationAtCounterComponent } from './challan-preparation-at-counter.component';

describe('ChallanPreparationAtCounterComponent', () => {
  let component: ChallanPreparationAtCounterComponent;
  let fixture: ComponentFixture<ChallanPreparationAtCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallanPreparationAtCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallanPreparationAtCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
