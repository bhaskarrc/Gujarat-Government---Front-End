import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplementaryDemandListComponent } from './supplementary-demand-list.component';

describe('SupplementaryDemandListComponent', () => {
  let component: SupplementaryDemandListComponent;
  let fixture: ComponentFixture<SupplementaryDemandListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplementaryDemandListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplementaryDemandListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
