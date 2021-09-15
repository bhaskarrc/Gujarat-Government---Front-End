import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PulledBackBillsComponent } from './pulled-back-bills.component';

describe('PulledBackBillsComponent', () => {
  let component: PulledBackBillsComponent;
  let fixture: ComponentFixture<PulledBackBillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PulledBackBillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PulledBackBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
