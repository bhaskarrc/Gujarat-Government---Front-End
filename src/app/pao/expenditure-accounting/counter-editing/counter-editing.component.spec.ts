import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterEditingComponent } from './counter-editing.component';

describe('CounterEditingComponent', () => {
  let component: CounterEditingComponent;
  let fixture: ComponentFixture<CounterEditingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterEditingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
