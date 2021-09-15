import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteConfirmCommonDialogComponent } from './delete-confirm-common-dialog.component';

describe('DeleteConfirmCommonDialogComponent', () => {
  let component: DeleteConfirmCommonDialogComponent;
  let fixture: ComponentFixture<DeleteConfirmCommonDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteConfirmCommonDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteConfirmCommonDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
