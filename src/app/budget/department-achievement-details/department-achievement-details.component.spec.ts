import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentAchievementDetailsComponent } from './department-achievement-details.component';

describe('DepartmentAchievementDetailsComponent', () => {
  let component: DepartmentAchievementDetailsComponent;
  let fixture: ComponentFixture<DepartmentAchievementDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentAchievementDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentAchievementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
