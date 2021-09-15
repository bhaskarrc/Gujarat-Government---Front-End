import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmdRecordRoomComponent } from './emd-record-room.component';

describe('EmdRecordRoomComponent', () => {
  let component: EmdRecordRoomComponent;
  let fixture: ComponentFixture<EmdRecordRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmdRecordRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmdRecordRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
