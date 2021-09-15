import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcDistributionViewComponent } from './lc-distribution-view.component';

describe('LcDistributionViewComponent', () => {
  let component: LcDistributionViewComponent;
  let fixture: ComponentFixture<LcDistributionViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcDistributionViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcDistributionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
