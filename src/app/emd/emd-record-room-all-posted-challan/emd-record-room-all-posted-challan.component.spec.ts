import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmdRecordRoomAllPostedChallanComponent } from './emd-record-room-all-posted-challan.component';

describe('EmdRecordRoomAllPostedChallanComponent', () => {
  let component: EmdRecordRoomAllPostedChallanComponent;
  let fixture: ComponentFixture<EmdRecordRoomAllPostedChallanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmdRecordRoomAllPostedChallanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmdRecordRoomAllPostedChallanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
