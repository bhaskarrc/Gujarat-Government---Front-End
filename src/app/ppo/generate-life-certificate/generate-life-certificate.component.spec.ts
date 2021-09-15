import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateLifeCertificateComponent } from './generate-life-certificate.component';

describe('GenerateLifeCertificateComponent', () => {
  let component: GenerateLifeCertificateComponent;
  let fixture: ComponentFixture<GenerateLifeCertificateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateLifeCertificateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateLifeCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
