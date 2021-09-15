import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordRoomComponent } from './record-room.component';

describe('RecordRoomComponent', () => {
  let component: RecordRoomComponent;
  let fixture: ComponentFixture<RecordRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
