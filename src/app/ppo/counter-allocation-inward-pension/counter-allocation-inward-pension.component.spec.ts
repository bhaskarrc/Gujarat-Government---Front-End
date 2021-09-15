import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterAllocationInwardPensionComponent } from './counter-allocation-inward-pension.component';

describe('CounterAllocationInwardPensionComponent', () => {
  let component: CounterAllocationInwardPensionComponent;
  let fixture: ComponentFixture<CounterAllocationInwardPensionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterAllocationInwardPensionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterAllocationInwardPensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
