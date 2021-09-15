import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseConfirmCommonDialogComponent } from './close-confirm-common-dialog.component';

describe('CloseConfirmCommonDialogComponent', () => {
  let component: CloseConfirmCommonDialogComponent;
  let fixture: ComponentFixture<CloseConfirmCommonDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloseConfirmCommonDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseConfirmCommonDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
