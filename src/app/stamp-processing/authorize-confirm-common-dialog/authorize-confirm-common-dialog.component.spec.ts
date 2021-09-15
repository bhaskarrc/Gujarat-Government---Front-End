import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizeConfirmCommonDialogComponent } from './authorize-confirm-common-dialog.component';

describe('AuthorizeConfirmCommonDialogComponent', () => {
  let component: AuthorizeConfirmCommonDialogComponent;
  let fixture: ComponentFixture<AuthorizeConfirmCommonDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorizeConfirmCommonDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizeConfirmCommonDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
