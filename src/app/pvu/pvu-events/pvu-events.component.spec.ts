import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PvuEventsComponent } from './pvu-events.component';

describe('PvuEventsComponent', () => {
  let component: PvuEventsComponent;
  let fixture: ComponentFixture<PvuEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PvuEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PvuEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
