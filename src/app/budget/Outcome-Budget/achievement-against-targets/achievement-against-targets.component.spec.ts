import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementAgainstTargetsComponent } from './achievement-against-targets.component';

describe('AchievementAgainstTargetsComponent', () => {
  let component: AchievementAgainstTargetsComponent;
  let fixture: ComponentFixture<AchievementAgainstTargetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchievementAgainstTargetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchievementAgainstTargetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
