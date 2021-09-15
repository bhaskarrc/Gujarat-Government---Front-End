import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsPvuListComponent } from './events-pvu-list.component';

describe('EventsPvuListComponent', () => {
  let component: EventsPvuListComponent;
  let fixture: ComponentFixture<EventsPvuListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsPvuListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsPvuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
