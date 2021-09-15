import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GtrFormSixtyOneAttachmentComponent } from './gtr-form-sixty-one-attachment.component';

describe('GtrFormSixtyOneAttachmentComponent', () => {
  let component: GtrFormSixtyOneAttachmentComponent;
  let fixture: ComponentFixture<GtrFormSixtyOneAttachmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GtrFormSixtyOneAttachmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GtrFormSixtyOneAttachmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
