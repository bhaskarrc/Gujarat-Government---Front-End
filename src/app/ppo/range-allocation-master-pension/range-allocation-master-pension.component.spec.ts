import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeAllocationMasterPensionComponent } from './range-allocation-master-pension.component';

describe('RangeAllocationMasterPensionComponent', () => {
  let component: RangeAllocationMasterPensionComponent;
  let fixture: ComponentFixture<RangeAllocationMasterPensionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangeAllocationMasterPensionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeAllocationMasterPensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
