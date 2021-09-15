import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurpriseVerificationDatViewComponent } from './surprise-verification-dat-view.component';

describe('SurpriseVerificationDatViewComponent', () => {
  let component: SurpriseVerificationDatViewComponent;
  let fixture: ComponentFixture<SurpriseVerificationDatViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurpriseVerificationDatViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurpriseVerificationDatViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
