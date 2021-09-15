import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcOpeningRequestCreateComponent } from './lc-opening-request-create.component';

describe('LcOpeningRequestCreateComponent', () => {
  let component: LcOpeningRequestCreateComponent;
  let fixture: ComponentFixture<LcOpeningRequestCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcOpeningRequestCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcOpeningRequestCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
