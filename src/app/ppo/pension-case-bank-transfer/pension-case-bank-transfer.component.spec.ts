import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PensionCaseBankTransferComponent } from './pension-case-bank-transfer.component';

describe('PensionCaseBankTransferComponent', () => {
  let component: PensionCaseBankTransferComponent;
  let fixture: ComponentFixture<PensionCaseBankTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PensionCaseBankTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PensionCaseBankTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
