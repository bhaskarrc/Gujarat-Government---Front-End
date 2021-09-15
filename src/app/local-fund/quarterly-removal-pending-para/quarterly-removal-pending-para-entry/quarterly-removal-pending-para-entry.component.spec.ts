import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuarterlyRemovalPendingParaEntryComponent } from './quarterly-removal-pending-para-entry.component';

describe('QuarterlyRemovalPendingParaEntryComponent', () => {
  let component: QuarterlyRemovalPendingParaEntryComponent;
  let fixture: ComponentFixture<QuarterlyRemovalPendingParaEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuarterlyRemovalPendingParaEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuarterlyRemovalPendingParaEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
