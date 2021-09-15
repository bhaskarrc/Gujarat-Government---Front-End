import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingCasesForRemovalAtHqRegisterComponent } from './pending-cases-for-removal-at-hq-register.component';

describe('PendingCasesForRemovalAtHqRegisterComponent', () => {
  let component: PendingCasesForRemovalAtHqRegisterComponent;
  let fixture: ComponentFixture<PendingCasesForRemovalAtHqRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingCasesForRemovalAtHqRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingCasesForRemovalAtHqRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
