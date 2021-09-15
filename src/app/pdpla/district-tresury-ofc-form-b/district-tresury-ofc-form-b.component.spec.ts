import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictTresuryOfcFormBComponent } from './district-tresury-ofc-form-b.component';

describe('DistrictTresuryOfcFormBComponent', () => {
  let component: DistrictTresuryOfcFormBComponent;
  let fixture: ComponentFixture<DistrictTresuryOfcFormBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictTresuryOfcFormBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictTresuryOfcFormBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
