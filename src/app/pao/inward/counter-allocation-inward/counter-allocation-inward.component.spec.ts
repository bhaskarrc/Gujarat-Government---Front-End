import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterAllocationInwardComponent } from './counter-allocation-inward.component';

describe('CounterAllocationInwardComponent', () => {
  let component: CounterAllocationInwardComponent;
  let fixture: ComponentFixture<CounterAllocationInwardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterAllocationInwardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterAllocationInwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
