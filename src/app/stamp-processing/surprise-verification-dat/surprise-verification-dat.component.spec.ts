import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurpriseVerificationDatComponent } from './surprise-verification-dat.component';

describe('SurpriseVerificationDatComponent', () => {
  let component: SurpriseVerificationDatComponent;
  let fixture: ComponentFixture<SurpriseVerificationDatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurpriseVerificationDatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurpriseVerificationDatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
