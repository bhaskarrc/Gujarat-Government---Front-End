import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcOpeningRequestViewComponent } from './lc-opening-request-view.component';

describe('LcOpeningRequestViewComponent', () => {
  let component: LcOpeningRequestViewComponent;
  let fixture: ComponentFixture<LcOpeningRequestViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcOpeningRequestViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcOpeningRequestViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
