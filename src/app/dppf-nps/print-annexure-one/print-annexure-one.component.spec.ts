import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintAnnexureOneComponent } from './print-annexure-one.component';

describe('PrintAnnexureOneComponent', () => {
  let component: PrintAnnexureOneComponent;
  let fixture: ComponentFixture<PrintAnnexureOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintAnnexureOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintAnnexureOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
