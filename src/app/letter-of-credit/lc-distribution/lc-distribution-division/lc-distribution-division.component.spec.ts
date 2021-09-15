import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcDistributionDivisionComponent } from './lc-distribution-division.component';

describe('LcDistributionDivisionComponent', () => {
  let component: LcDistributionDivisionComponent;
  let fixture: ComponentFixture<LcDistributionDivisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcDistributionDivisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcDistributionDivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
