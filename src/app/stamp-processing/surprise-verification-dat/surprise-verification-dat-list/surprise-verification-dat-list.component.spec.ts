import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurpriseVerificationDatListComponent } from './surprise-verification-dat-list.component';

describe('SurpriseVerificationDatListComponent', () => {
  let component: SurpriseVerificationDatListComponent;
  let fixture: ComponentFixture<SurpriseVerificationDatListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurpriseVerificationDatListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurpriseVerificationDatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
