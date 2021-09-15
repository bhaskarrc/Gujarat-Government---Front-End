import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GtrSeventySevenComponent } from './gtr-seventy-seven.component';

describe('GtrSeventySevenComponent', () => {
  let component: GtrSeventySevenComponent;
  let fixture: ComponentFixture<GtrSeventySevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GtrSeventySevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GtrSeventySevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
