import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndentConsolidationComponent } from './indent-consolidation.component';

describe('IndentConsolidationComponent', () => {
  let component: IndentConsolidationComponent;
  let fixture: ComponentFixture<IndentConsolidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndentConsolidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndentConsolidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
