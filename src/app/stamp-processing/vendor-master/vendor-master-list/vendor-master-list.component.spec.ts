import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorMasterListComponent } from './vendor-master-list.component';

describe('VendorMasterListComponent', () => {
  let component: VendorMasterListComponent;
  let fixture: ComponentFixture<VendorMasterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorMasterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorMasterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
