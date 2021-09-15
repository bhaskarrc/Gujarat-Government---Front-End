import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenaltyAmountReceiveAoComponent } from './penalty-amount-receive-ao.component';

describe('PenaltyAmountReceiveAoComponent', () => {
  let component: PenaltyAmountReceiveAoComponent;
  let fixture: ComponentFixture<PenaltyAmountReceiveAoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenaltyAmountReceiveAoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenaltyAmountReceiveAoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
