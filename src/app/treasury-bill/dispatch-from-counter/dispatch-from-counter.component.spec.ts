import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatchFromCounterComponent } from './dispatch-from-counter.component';

describe('DispatchFromCounterComponent', () => {
  let component: DispatchFromCounterComponent;
  let fixture: ComponentFixture<DispatchFromCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispatchFromCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispatchFromCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
