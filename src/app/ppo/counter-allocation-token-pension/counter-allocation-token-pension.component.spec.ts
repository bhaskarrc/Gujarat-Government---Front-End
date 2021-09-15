import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterAllocationTokenPensionComponent } from './counter-allocation-token-pension.component';

describe('CounterAllocationTokenPensionComponent', () => {
  let component: CounterAllocationTokenPensionComponent;
  let fixture: ComponentFixture<CounterAllocationTokenPensionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterAllocationTokenPensionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterAllocationTokenPensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
