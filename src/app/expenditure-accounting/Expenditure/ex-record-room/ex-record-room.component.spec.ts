import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExRecordRoomComponent } from './ex-record-room.component';

describe('ExRecordRoomComponent', () => {
  let component: ExRecordRoomComponent;
  let fixture: ComponentFixture<ExRecordRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExRecordRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExRecordRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
