import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcOpeningRequestCreateEditComponent } from './lc-opening-request-create-edit.component';

describe('LcOpeningRequestCreateEditComponent', () => {
  let component: LcOpeningRequestCreateEditComponent;
  let fixture: ComponentFixture<LcOpeningRequestCreateEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcOpeningRequestCreateEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcOpeningRequestCreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
