import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadAsAccountComponent } from './upload-as-account.component';

describe('UploadAsAccountComponent', () => {
  let component: UploadAsAccountComponent;
  let fixture: ComponentFixture<UploadAsAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadAsAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadAsAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
