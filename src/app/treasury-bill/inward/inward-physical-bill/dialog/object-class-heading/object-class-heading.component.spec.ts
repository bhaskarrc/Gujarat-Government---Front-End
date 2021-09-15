import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectClassHeadingComponent } from './object-class-heading.component';

describe('ObjectClassHeadingComponent', () => {
  let component: ObjectClassHeadingComponent;
  let fixture: ComponentFixture<ObjectClassHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectClassHeadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectClassHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
