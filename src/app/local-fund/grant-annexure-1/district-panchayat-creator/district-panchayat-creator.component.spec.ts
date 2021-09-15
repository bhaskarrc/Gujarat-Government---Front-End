import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictPanchayatCreatorComponent } from './district-panchayat-creator.component';

describe('DistrictPanchayatCreatorComponent', () => {
  let component: DistrictPanchayatCreatorComponent;
  let fixture: ComponentFixture<DistrictPanchayatCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictPanchayatCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictPanchayatCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
