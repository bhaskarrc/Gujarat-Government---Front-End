import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutwardDetailsHbaComponent } from './outward-details-hba.component';

describe('OutwardDetailsHbaComponent', () => {
  let component: OutwardDetailsHbaComponent;
  let fixture: ComponentFixture<OutwardDetailsHbaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutwardDetailsHbaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutwardDetailsHbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
