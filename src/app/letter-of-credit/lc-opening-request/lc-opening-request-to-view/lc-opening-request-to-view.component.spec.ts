import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcOpeningRequestToViewComponent } from './lc-opening-request-to-view.component';

describe('LcOpeningRequestToViewComponent', () => {
  let component: LcOpeningRequestToViewComponent;
  let fixture: ComponentFixture<LcOpeningRequestToViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcOpeningRequestToViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcOpeningRequestToViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
