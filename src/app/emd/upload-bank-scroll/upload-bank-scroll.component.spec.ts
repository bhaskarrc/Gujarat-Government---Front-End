import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadBankScrollComponent } from './upload-bank-scroll.component';

describe('UploadBankScrollComponent', () => {
  let component: UploadBankScrollComponent;
  let fixture: ComponentFixture<UploadBankScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadBankScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadBankScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
