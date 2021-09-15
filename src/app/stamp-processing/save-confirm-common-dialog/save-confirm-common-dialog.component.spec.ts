import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveConfirmCommonDialogComponent } from './save-confirm-common-dialog.component';

describe('SaveConfirmCommonDialogComponent', () => {
  let component: SaveConfirmCommonDialogComponent;
  let fixture: ComponentFixture<SaveConfirmCommonDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveConfirmCommonDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveConfirmCommonDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
