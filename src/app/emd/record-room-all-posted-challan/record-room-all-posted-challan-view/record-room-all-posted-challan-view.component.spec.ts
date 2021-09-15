import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordRoomAllPostedChallanViewComponent } from './record-room-all-posted-challan-view.component';

describe('RecordRoomAllPostedChallanViewComponent', () => {
  let component: RecordRoomAllPostedChallanViewComponent;
  let fixture: ComponentFixture<RecordRoomAllPostedChallanViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordRoomAllPostedChallanViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordRoomAllPostedChallanViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
