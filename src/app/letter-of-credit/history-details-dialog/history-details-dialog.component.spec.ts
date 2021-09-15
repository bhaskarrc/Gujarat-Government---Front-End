import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryDetailsDialogComponent } from './history-details-dialog.component';

describe('HistoryDetailsDialogComponent', () => {
  let component: HistoryDetailsDialogComponent;
  let fixture: ComponentFixture<HistoryDetailsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryDetailsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
