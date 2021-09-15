import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnexureThreeScheduleComponent } from './annexure-three-schedule.component';

describe('AnnexureThreeScheduleComponent', () => {
  let component: AnnexureThreeScheduleComponent;
  let fixture: ComponentFixture<AnnexureThreeScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnexureThreeScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnexureThreeScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
