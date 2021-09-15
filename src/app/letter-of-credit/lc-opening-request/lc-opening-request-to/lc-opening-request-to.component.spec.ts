import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcOpeningRequestToComponent } from './lc-opening-request-to.component';

describe('LcOpeningRequestToComponent', () => {
  let component: LcOpeningRequestToComponent;
  let fixture: ComponentFixture<LcOpeningRequestToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcOpeningRequestToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcOpeningRequestToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
