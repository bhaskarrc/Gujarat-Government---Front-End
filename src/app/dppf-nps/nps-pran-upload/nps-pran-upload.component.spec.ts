import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpsPranUploadComponent } from './nps-pran-upload.component';

describe('NpsPranUploadComponent', () => {
  let component: NpsPranUploadComponent;
  let fixture: ComponentFixture<NpsPranUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpsPranUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpsPranUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
