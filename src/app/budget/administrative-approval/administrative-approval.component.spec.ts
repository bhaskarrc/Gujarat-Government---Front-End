import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LockingUnlockingTimeLimitComponent } from './locking-unlocking-time-limit.component';

describe('LockingUnlockingTimeLimitComponent', () => {
  let component: LockingUnlockingTimeLimitComponent;
  let fixture: ComponentFixture<LockingUnlockingTimeLimitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockingUnlockingTimeLimitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockingUnlockingTimeLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
