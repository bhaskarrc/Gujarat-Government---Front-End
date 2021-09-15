import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLegacyUploadTrancationComponent } from './new-legacy-upload-trancation.component';

describe('NewLegacyUploadTrancationComponent', () => {
  let component: NewLegacyUploadTrancationComponent;
  let fixture: ComponentFixture<NewLegacyUploadTrancationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewLegacyUploadTrancationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLegacyUploadTrancationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
