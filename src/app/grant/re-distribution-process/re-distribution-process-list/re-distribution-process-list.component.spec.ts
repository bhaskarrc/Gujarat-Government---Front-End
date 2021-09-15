import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReDistributionProcessListComponent } from './re-distribution-process-list.component';

describe('ReDistributionProcessListComponent', () => {
  let component: ReDistributionProcessListComponent;
  let fixture: ComponentFixture<ReDistributionProcessListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReDistributionProcessListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReDistributionProcessListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
