import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtcCertificateComponent } from './utc-certificate.component';

describe('UtcCertificateComponent', () => {
  let component: UtcCertificateComponent;
  let fixture: ComponentFixture<UtcCertificateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtcCertificateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtcCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
