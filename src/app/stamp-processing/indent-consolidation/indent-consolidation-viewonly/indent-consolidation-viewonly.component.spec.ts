import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndentConsolidationViewonlyComponent } from './indent-consolidation-viewonly.component';

describe('IndentConsolidationViewonlyComponent', () => {
  let component: IndentConsolidationViewonlyComponent;
  let fixture: ComponentFixture<IndentConsolidationViewonlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndentConsolidationViewonlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndentConsolidationViewonlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
