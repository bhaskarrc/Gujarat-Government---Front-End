import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplementaryDemandViewComponent } from './supplementary-demand-view.component';

describe('SupplementaryDemandViewComponent', () => {
  let component: SupplementaryDemandViewComponent;
  let fixture: ComponentFixture<SupplementaryDemandViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplementaryDemandViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplementaryDemandViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
