import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssuredCareerProgressionComponent } from './assured-career-progression.component';

describe('AssuredCareerProgressionComponent', () => {
  let component: AssuredCareerProgressionComponent;
  let fixture: ComponentFixture<AssuredCareerProgressionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssuredCareerProgressionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssuredCareerProgressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
