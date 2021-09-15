import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurpriseVerificationToViewComponent } from './surprise-verification-to-view.component';

describe('SurpriseVerificationToViewComponent', () => {
  let component: SurpriseVerificationToViewComponent;
  let fixture: ComponentFixture<SurpriseVerificationToViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurpriseVerificationToViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurpriseVerificationToViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
