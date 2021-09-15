import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GtrSeventyEightComponent } from './gtr-seventy-eight.component';

describe('GtrSeventyEightComponent', () => {
  let component: GtrSeventyEightComponent;
  let fixture: ComponentFixture<GtrSeventyEightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GtrSeventyEightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GtrSeventyEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
