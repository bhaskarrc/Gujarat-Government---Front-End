import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTrackingReportComponent } from './item-tracking-report.component';

describe('ItemTrackingReportComponent', () => {
  let component: ItemTrackingReportComponent;
  let fixture: ComponentFixture<ItemTrackingReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemTrackingReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTrackingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
