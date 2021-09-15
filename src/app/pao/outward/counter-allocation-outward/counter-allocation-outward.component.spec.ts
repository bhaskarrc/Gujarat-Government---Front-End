import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterAllocationOutwardComponent } from './counter-allocation-outward.component';

describe('CounterAllocationOutwardComponent', () => {
  let component: CounterAllocationOutwardComponent;
  let fixture: ComponentFixture<CounterAllocationOutwardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterAllocationOutwardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterAllocationOutwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
