import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndentConsolidationListComponent } from './indent-consolidation-list.component';

describe('IndentConsolidationListComponent', () => {
  let component: IndentConsolidationListComponent;
  let fixture: ComponentFixture<IndentConsolidationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndentConsolidationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndentConsolidationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
