import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintAnnexureTwoComponent } from './print-annexure-two.component';

describe('PrintAnnexureTwoComponent', () => {
  let component: PrintAnnexureTwoComponent;
  let fixture: ComponentFixture<PrintAnnexureTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintAnnexureTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintAnnexureTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
