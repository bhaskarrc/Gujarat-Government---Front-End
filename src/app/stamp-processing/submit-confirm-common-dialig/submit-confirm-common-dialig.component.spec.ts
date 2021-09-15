import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitConfirmCommonDialigComponent } from './submit-confirm-common-dialig.component';

describe('SubmitConfirmCommonDialigComponent', () => {
  let component: SubmitConfirmCommonDialigComponent;
  let fixture: ComponentFixture<SubmitConfirmCommonDialigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitConfirmCommonDialigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitConfirmCommonDialigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
