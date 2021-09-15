import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReDistributionProcessComponent } from './re-distribution-process.component';

describe('ReDistributionProcessComponent', () => {
  let component: ReDistributionProcessComponent;
  let fixture: ComponentFixture<ReDistributionProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReDistributionProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReDistributionProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
