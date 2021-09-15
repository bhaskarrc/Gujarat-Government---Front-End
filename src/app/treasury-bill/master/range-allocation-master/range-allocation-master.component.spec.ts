import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeAllocationMasterComponent } from './range-allocation-master.component';

describe('RangeAllocationMasterComponent', () => {
  let component: RangeAllocationMasterComponent;
  let fixture: ComponentFixture<RangeAllocationMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangeAllocationMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeAllocationMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
