import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcOpeningRequestSavedComponent } from './lc-opening-request-saved.component';

describe('LcOpeningRequestSavedComponent', () => {
  let component: LcOpeningRequestSavedComponent;
  let fixture: ComponentFixture<LcOpeningRequestSavedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcOpeningRequestSavedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcOpeningRequestSavedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
