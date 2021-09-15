import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictMahekamRegisterListComponent } from './district-mahekam-register-list.component';

describe('DistrictMahekamRegisterListComponent', () => {
  let component: DistrictMahekamRegisterListComponent;
  let fixture: ComponentFixture<DistrictMahekamRegisterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictMahekamRegisterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictMahekamRegisterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
