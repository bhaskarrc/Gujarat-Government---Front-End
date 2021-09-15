import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcAttachmentEditComponent } from './lc-attachment-edit.component';

describe('LcAttachmentEditComponent', () => {
  let component: LcAttachmentEditComponent;
  let fixture: ComponentFixture<LcAttachmentEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcAttachmentEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcAttachmentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
