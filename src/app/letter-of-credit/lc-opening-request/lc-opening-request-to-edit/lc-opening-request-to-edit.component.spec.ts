import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcOpeningRequestToEditComponent } from './lc-opening-request-to-edit.component';

describe('LcOpeningRequestToEditComponent', () => {
  let component: LcOpeningRequestToEditComponent;
  let fixture: ComponentFixture<LcOpeningRequestToEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcOpeningRequestToEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcOpeningRequestToEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
