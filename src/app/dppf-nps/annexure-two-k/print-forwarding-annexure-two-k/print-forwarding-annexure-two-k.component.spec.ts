import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintForwardingAnnexureTwoKComponent } from './print-forwarding-annexure-two-k.component';

describe('PrintForwardingAnnexureTwoKComponent', () => {
  let component: PrintForwardingAnnexureTwoKComponent;
  let fixture: ComponentFixture<PrintForwardingAnnexureTwoKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintForwardingAnnexureTwoKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintForwardingAnnexureTwoKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
