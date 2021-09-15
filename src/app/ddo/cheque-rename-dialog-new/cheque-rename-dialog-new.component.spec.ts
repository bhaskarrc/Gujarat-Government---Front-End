import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeRenameDialogNewComponent } from './cheque-rename-dialog-new.component';

describe('ChequeRenameDialogNewComponent', () => {
  let component: ChequeRenameDialogNewComponent;
  let fixture: ComponentFixture<ChequeRenameDialogNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChequeRenameDialogNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChequeRenameDialogNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
