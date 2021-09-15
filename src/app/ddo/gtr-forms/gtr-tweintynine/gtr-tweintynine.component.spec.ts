import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GtrTweintynineComponent } from './gtr-tweintynine.component';

describe('GtrTweintynineComponent', () => {
  let component: GtrTweintynineComponent;
  let fixture: ComponentFixture<GtrTweintynineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GtrTweintynineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GtrTweintynineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
