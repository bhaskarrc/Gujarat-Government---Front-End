import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndentConsolidatedViewComponent } from './indent-consolidated-view.component';

describe('IndentConsolidatedViewComponent', () => {
  let component: IndentConsolidatedViewComponent;
  let fixture: ComponentFixture<IndentConsolidatedViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndentConsolidatedViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndentConsolidatedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
