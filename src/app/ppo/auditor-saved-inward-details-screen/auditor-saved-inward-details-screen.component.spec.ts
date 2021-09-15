import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditorSavedInwardDetailsScreenComponent } from './auditor-saved-inward-details-screen.component';

describe('AuditorSavedInwardDetailsScreenComponent', () => {
  let component: AuditorSavedInwardDetailsScreenComponent;
  let fixture: ComponentFixture<AuditorSavedInwardDetailsScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditorSavedInwardDetailsScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditorSavedInwardDetailsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
