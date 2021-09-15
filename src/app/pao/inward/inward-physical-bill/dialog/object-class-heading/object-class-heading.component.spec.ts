import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectClassHeadingPaoComponent } from './object-class-heading.component';

describe('ObjectClassHeadingPaoComponent', () => {
  let component: ObjectClassHeadingPaoComponent;
  let fixture: ComponentFixture<ObjectClassHeadingPaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectClassHeadingPaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectClassHeadingPaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
