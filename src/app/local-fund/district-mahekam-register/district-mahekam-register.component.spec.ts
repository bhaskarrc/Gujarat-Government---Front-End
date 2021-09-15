import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictMahekamRegisterComponent } from './district-mahekam-register.component';

describe('DistrictMahekamRegisterComponent', () => {
  let component: DistrictMahekamRegisterComponent;
  let fixture: ComponentFixture<DistrictMahekamRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictMahekamRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictMahekamRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
