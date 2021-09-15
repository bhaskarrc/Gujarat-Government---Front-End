import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenaltyAmountReceiveHaComponent } from './penalty-amount-receive-ha.component';

describe('PenaltyAmountReceiveHaComponent', () => {
  let component: PenaltyAmountReceiveHaComponent;
  let fixture: ComponentFixture<PenaltyAmountReceiveHaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenaltyAmountReceiveHaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenaltyAmountReceiveHaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
