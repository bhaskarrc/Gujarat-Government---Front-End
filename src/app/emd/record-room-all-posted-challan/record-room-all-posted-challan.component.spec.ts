import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordRoomAllPostedChallanComponent } from './record-room-all-posted-challan.component';

describe('RecordRoomAllPostedChallanComponent', () => {
  let component: RecordRoomAllPostedChallanComponent;
  let fixture: ComponentFixture<RecordRoomAllPostedChallanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordRoomAllPostedChallanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordRoomAllPostedChallanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
