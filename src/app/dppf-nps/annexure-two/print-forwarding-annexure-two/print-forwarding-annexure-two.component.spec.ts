import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintForwardingAnnexureTwoComponent } from './print-forwarding-annexure-two.component';

describe('PrintForwardingAnnexureTwoComponent', () => {
  let component: PrintForwardingAnnexureTwoComponent;
  let fixture: ComponentFixture<PrintForwardingAnnexureTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintForwardingAnnexureTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintForwardingAnnexureTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
