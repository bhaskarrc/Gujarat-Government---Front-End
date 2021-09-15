import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpsDdoSideWithdrawalComponent } from './nps-ddo-side-withdrawal.component';

describe('NpsDdoSideWithdrawalComponent', () => {
  let component: NpsDdoSideWithdrawalComponent;
  let fixture: ComponentFixture<NpsDdoSideWithdrawalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpsDdoSideWithdrawalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpsDdoSideWithdrawalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
