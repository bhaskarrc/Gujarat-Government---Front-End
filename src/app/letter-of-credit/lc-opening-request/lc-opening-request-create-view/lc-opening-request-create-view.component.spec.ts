import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcOpeningRequestCreateViewComponent } from './lc-opening-request-create-view.component';

describe('LcOpeningRequestCreateViewComponent', () => {
  let component: LcOpeningRequestCreateViewComponent;
  let fixture: ComponentFixture<LcOpeningRequestCreateViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcOpeningRequestCreateViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcOpeningRequestCreateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
