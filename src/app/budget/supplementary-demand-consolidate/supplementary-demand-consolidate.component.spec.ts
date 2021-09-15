import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplementaryDemandConsolidateComponent } from './supplementary-demand-consolidate.component';

describe('SupplementaryDemandConsolidateComponent', () => {
  let component: SupplementaryDemandConsolidateComponent;
  let fixture: ComponentFixture<SupplementaryDemandConsolidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplementaryDemandConsolidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplementaryDemandConsolidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
