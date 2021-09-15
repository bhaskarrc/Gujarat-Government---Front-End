import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplementaryDemandConsolidateListComponent } from './supplementary-demand-consolidate-list.component';

describe('SupplementaryDemandConsolidateListComponent', () => {
  let component: SupplementaryDemandConsolidateListComponent;
  let fixture: ComponentFixture<SupplementaryDemandConsolidateListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplementaryDemandConsolidateListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplementaryDemandConsolidateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
