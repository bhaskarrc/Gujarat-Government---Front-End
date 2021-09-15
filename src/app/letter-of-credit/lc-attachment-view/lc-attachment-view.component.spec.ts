import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcAttachmentViewComponent } from './lc-attachment-view.component';

describe('LcAttachmentViewComponent', () => {
  let component: LcAttachmentViewComponent;
  let fixture: ComponentFixture<LcAttachmentViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcAttachmentViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcAttachmentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
