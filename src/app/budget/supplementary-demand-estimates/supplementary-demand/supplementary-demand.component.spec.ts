import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplementaryDemandComponent } from './supplementary-demand.component';

describe('SupplementaryDemandComponent', () => {
  let component: SupplementaryDemandComponent;
  let fixture: ComponentFixture<SupplementaryDemandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplementaryDemandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplementaryDemandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
