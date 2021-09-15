import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GtrThirtyComponent } from './gtr-thirty.component';

describe('GtrThirtyComponent', () => {
  let component: GtrThirtyComponent;
  let fixture: ComponentFixture<GtrThirtyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GtrThirtyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GtrThirtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
