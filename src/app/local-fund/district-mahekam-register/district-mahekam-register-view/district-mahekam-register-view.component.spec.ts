import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictMahekamRegisterViewComponent } from './district-mahekam-register-view.component';

describe('DistrictMahekamRegisterViewComponent', () => {
  let component: DistrictMahekamRegisterViewComponent;
  let fixture: ComponentFixture<DistrictMahekamRegisterViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictMahekamRegisterViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictMahekamRegisterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
