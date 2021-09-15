import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GtrSeventysixComponent } from './gtr-seventysix.component';

describe('GtrSeventysixComponent', () => {
  let component: GtrSeventysixComponent;
  let fixture: ComponentFixture<GtrSeventysixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GtrSeventysixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GtrSeventysixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
