import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorMasterViewComponent } from './vendor-master-view.component';

describe('VendorMasterViewComponent', () => {
  let component: VendorMasterViewComponent;
  let fixture: ComponentFixture<VendorMasterViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorMasterViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorMasterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
