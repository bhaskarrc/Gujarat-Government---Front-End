import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WipViewEstimateComponent } from './wip-view-estimate.component';

describe('WipViewEstimateComponent', () => {
  let component: WipViewEstimateComponent;
  let fixture: ComponentFixture<WipViewEstimateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WipViewEstimateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WipViewEstimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
