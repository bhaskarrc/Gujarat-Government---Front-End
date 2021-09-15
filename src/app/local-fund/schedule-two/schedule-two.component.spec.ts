import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleTwoComponent } from './schedule-two.component';

describe('ScheduleTwoComponent', () => {
  let component: ScheduleTwoComponent;
  let fixture: ComponentFixture<ScheduleTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
