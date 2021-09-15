import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictOfficeImportantParaRegisterComponent } from './district-office-important-para-register.component';

describe('DistrictOfficeImportantParaRegisterComponent', () => {
  let component: DistrictOfficeImportantParaRegisterComponent;
  let fixture: ComponentFixture<DistrictOfficeImportantParaRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictOfficeImportantParaRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictOfficeImportantParaRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
