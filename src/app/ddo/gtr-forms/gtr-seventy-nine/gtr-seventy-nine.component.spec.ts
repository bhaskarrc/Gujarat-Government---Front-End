import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GtrSeventyNineComponent } from './gtr-seventy-nine.component';

describe('GtrSeventyNineComponent', () => {
  let component: GtrSeventyNineComponent;
  let fixture: ComponentFixture<GtrSeventyNineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GtrSeventyNineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GtrSeventyNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
