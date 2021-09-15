import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpsLegacyUploadComponent } from './nps-legacy-upload.component';

describe('NpsLegacyUploadComponent', () => {
  let component: NpsLegacyUploadComponent;
  let fixture: ComponentFixture<NpsLegacyUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpsLegacyUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpsLegacyUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
