import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LockingunlockingComponent } from './lockingunlocking.component';

describe('LockingunlickingComponent', () => {
  let component: LockingunlockingComponent;
  let fixture: ComponentFixture<LockingunlockingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockingunlockingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockingunlockingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
