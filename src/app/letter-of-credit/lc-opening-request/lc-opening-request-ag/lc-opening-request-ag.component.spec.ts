import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcOpeningRequestAgComponent } from './lc-opening-request-ag.component';

describe('LcOpeningRequestAgComponent', () => {
  let component: LcOpeningRequestAgComponent;
  let fixture: ComponentFixture<LcOpeningRequestAgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcOpeningRequestAgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcOpeningRequestAgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
