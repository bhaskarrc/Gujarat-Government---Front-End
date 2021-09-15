import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PensionTransferCaseComponent } from './pension-transfer-case.component';

describe('PensionTransferCaseComponent', () => {
  let component: PensionTransferCaseComponent;
  let fixture: ComponentFixture<PensionTransferCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PensionTransferCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PensionTransferCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
