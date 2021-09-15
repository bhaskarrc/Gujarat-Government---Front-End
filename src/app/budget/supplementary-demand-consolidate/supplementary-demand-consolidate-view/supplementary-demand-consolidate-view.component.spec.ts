import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplementaryDemandConsolidateViewComponent } from './supplementary-demand-consolidate-view.component';

describe('SupplementaryDemandConsolidateViewComponent', () => {
  let component: SupplementaryDemandConsolidateViewComponent;
  let fixture: ComponentFixture<SupplementaryDemandConsolidateViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplementaryDemandConsolidateViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplementaryDemandConsolidateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
