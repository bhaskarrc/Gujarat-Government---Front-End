import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GtrSeventyfiveComponent } from './gtr-seventyfive.component';

describe('GtrSeventyfiveComponent', () => {
  let component: GtrSeventyfiveComponent;
  let fixture: ComponentFixture<GtrSeventyfiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GtrSeventyfiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GtrSeventyfiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
