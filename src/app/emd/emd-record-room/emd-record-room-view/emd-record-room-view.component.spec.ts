import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmdRecordRoomViewComponent } from './emd-record-room-view.component';

describe('EmdRecordRoomViewComponent', () => {
  let component: EmdRecordRoomViewComponent;
  let fixture: ComponentFixture<EmdRecordRoomViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmdRecordRoomViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmdRecordRoomViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
