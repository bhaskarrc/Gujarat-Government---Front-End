import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NdcRequestCaseComponent } from './ndc-request-case.component';

describe('NdcRequestCaseComponent', () => {
  let component: NdcRequestCaseComponent;
  let fixture: ComponentFixture<NdcRequestCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NdcRequestCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NdcRequestCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
