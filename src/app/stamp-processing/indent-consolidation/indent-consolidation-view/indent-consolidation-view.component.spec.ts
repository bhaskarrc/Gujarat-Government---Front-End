import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndentConsolidationViewComponent } from './indent-consolidation-view.component';

describe('IndentConsolidationViewComponent', () => {
  let component: IndentConsolidationViewComponent;
  let fixture: ComponentFixture<IndentConsolidationViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndentConsolidationViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndentConsolidationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
