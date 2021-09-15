import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitPromptDialogComponent } from './submit-prompt-dialog.component';

describe('SubmitPromptDialogComponent', () => {
  let component: SubmitPromptDialogComponent;
  let fixture: ComponentFixture<SubmitPromptDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitPromptDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitPromptDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
