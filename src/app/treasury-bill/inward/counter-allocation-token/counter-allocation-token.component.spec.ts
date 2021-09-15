import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterAllocationTokenComponent } from './counter-allocation-token.component';

describe('CounterAllocationTokenComponent', () => {
  let component: CounterAllocationTokenComponent;
  let fixture: ComponentFixture<CounterAllocationTokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterAllocationTokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterAllocationTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
