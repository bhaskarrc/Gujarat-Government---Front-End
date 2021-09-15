import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurpriseVerificationToComponent } from './surprise-verification-to.component';

describe('SurpriseVerificationToComponent', () => {
  let component: SurpriseVerificationToComponent;
  let fixture: ComponentFixture<SurpriseVerificationToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurpriseVerificationToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurpriseVerificationToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
