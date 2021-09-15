import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeDuplicateDialogNewComponent } from './cheque-duplicate-dialog-new.component';

describe('ChequeDuplicateDialogNewComponent', () => {
  let component: ChequeDuplicateDialogNewComponent;
  let fixture: ComponentFixture<ChequeDuplicateDialogNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChequeDuplicateDialogNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChequeDuplicateDialogNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
