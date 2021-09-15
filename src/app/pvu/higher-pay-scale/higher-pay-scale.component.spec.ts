import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HigherPayScaleComponent } from './higher-pay-scale.component';

describe('HigherPayScaleComponent', () => {
  let component: HigherPayScaleComponent;
  let fixture: ComponentFixture<HigherPayScaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HigherPayScaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HigherPayScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
