import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectionMemoPaComputerComponent } from './correction-memo-pa-computer.component';

describe('CorrectionMemoPaComputerComponent', () => {
  let component: CorrectionMemoPaComputerComponent;
  let fixture: ComponentFixture<CorrectionMemoPaComputerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrectionMemoPaComputerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectionMemoPaComputerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
