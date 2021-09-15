import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DppfOnlinePensionCasePrintComponent } from './dppf-online-pension-case-print.component';

describe('DppfOnlinePensionCasePrintComponent', () => {
  let component: DppfOnlinePensionCasePrintComponent;
  let fixture: ComponentFixture<DppfOnlinePensionCasePrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DppfOnlinePensionCasePrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DppfOnlinePensionCasePrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
