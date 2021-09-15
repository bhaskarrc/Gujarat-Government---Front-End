import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdpCodeMasterReceiptComponent } from './edp-code-master-receipt.component';

describe('EdpCodeMasterReceiptComponent', () => {
  let component: EdpCodeMasterReceiptComponent;
  let fixture: ComponentFixture<EdpCodeMasterReceiptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdpCodeMasterReceiptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdpCodeMasterReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
