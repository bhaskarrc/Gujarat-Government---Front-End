import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcOpeningRequestEditComponent } from './lc-opening-request-edit.component';

describe('LcOpeningRequestEditComponent', () => {
  let component: LcOpeningRequestEditComponent;
  let fixture: ComponentFixture<LcOpeningRequestEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcOpeningRequestEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcOpeningRequestEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
