import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToLevelComponent } from './to-level.component';

describe('ToLevelComponent', () => {
  let component: ToLevelComponent;
  let fixture: ComponentFixture<ToLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
