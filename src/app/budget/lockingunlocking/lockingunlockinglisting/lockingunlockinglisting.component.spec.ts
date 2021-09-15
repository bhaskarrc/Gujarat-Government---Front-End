import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LockingunlockinglistingComponent } from './lockingunlockinglisting.component';

describe('LockingunlockinglistingComponent', () => {
  let component: LockingunlockinglistingComponent;
  let fixture: ComponentFixture<LockingunlockinglistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockingunlockinglistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockingunlockinglistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
