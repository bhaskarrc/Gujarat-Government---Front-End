import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GstFilrAccountingHaComponent } from './gst-filr-accounting-ha.component';

describe('GstFilrAccountingHaComponent', () => {
  let component: GstFilrAccountingHaComponent;
  let fixture: ComponentFixture<GstFilrAccountingHaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GstFilrAccountingHaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GstFilrAccountingHaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
