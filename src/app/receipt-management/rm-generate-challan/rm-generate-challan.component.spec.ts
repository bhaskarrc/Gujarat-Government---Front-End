import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RmGenerateChallanComponent } from './rm-generate-challan.component';

describe('RmGenerateChallanComponent', () => {
  let component: RmGenerateChallanComponent;
  let fixture: ComponentFixture<RmGenerateChallanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RmGenerateChallanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RmGenerateChallanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
