import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewItemEstimateConsolidationComponent } from './new-item-estimate-consolidation.component';

describe('NewItemEstimateConsolidationComponent', () => {
  let component: NewItemEstimateConsolidationComponent;
  let fixture: ComponentFixture<NewItemEstimateConsolidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewItemEstimateConsolidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewItemEstimateConsolidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
