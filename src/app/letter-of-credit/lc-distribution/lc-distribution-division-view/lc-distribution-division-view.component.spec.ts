import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcDistributionDivisionViewComponent } from './lc-distribution-division-view.component';

describe('LcDistributionDivisionViewComponent', () => {
  let component: LcDistributionDivisionViewComponent;
  let fixture: ComponentFixture<LcDistributionDivisionViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcDistributionDivisionViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcDistributionDivisionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
