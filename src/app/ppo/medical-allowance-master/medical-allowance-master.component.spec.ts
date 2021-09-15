import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalAllowanceMasterComponent } from './medical-allowance-master.component';

describe('MedicalAllowanceMasterComponent', () => {
  let component: MedicalAllowanceMasterComponent;
  let fixture: ComponentFixture<MedicalAllowanceMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalAllowanceMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalAllowanceMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
