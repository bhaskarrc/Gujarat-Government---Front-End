import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcDistributionCircleViewComponent } from './lc-distribution-circle-view.component';

describe('LcDistributionCircleViewComponent', () => {
  let component: LcDistributionCircleViewComponent;
  let fixture: ComponentFixture<LcDistributionCircleViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcDistributionCircleViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcDistributionCircleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
