import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GstFilrAccountingAoComponent } from './gst-filr-accounting-ao.component';

describe('GstFilrAccountingAoComponent', () => {
  let component: GstFilrAccountingAoComponent;
  let fixture: ComponentFixture<GstFilrAccountingAoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GstFilrAccountingAoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GstFilrAccountingAoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
