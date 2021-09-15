import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisedEstimateViewComponent } from './revised-estimate-view.component';

describe('RevisedEstimateViewComponent', () => {
  let component: RevisedEstimateViewComponent;
  let fixture: ComponentFixture<RevisedEstimateViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevisedEstimateViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisedEstimateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
