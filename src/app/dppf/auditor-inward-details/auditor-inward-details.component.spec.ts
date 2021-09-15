import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditorAuditorInwardDetailsComponent } from './auditor-inward-details.component';

describe('AuditorInwardDetailsComponent', () => {
  let component: AuditorInwardDetailsComponent;
  let fixture: ComponentFixture<AuditorInwardDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditorInwardDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditorInwardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

