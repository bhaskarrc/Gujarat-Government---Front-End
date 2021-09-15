import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentAchievementDetailsListComponent } from './department-achievement-details-list.component';

describe('DepartmentAchievementDetailsListComponent', () => {
  let component: DepartmentAchievementDetailsListComponent;
  let fixture: ComponentFixture<DepartmentAchievementDetailsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentAchievementDetailsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentAchievementDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
