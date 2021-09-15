import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfrAttachmentComponent } from './cfr-attachment.component';

describe('CfrAttachmentComponent', () => {
  let component: CfrAttachmentComponent;
  let fixture: ComponentFixture<CfrAttachmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfrAttachmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfrAttachmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
