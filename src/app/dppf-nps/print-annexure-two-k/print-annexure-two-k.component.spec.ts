import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintAnnexureTwoKComponent } from './print-annexure-two-k.component';

describe('PrintAnnexureTwoKComponent', () => {
  let component: PrintAnnexureTwoKComponent;
  let fixture: ComponentFixture<PrintAnnexureTwoKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintAnnexureTwoKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintAnnexureTwoKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
