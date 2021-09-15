import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadAsAccountListComponent } from './upload-as-account-list.component';

describe('UploadAsAccountListComponent', () => {
  let component: UploadAsAccountListComponent;
  let fixture: ComponentFixture<UploadAsAccountListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadAsAccountListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadAsAccountListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
