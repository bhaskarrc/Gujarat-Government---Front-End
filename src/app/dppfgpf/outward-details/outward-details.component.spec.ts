import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutwardDetailsComponent } from './outward-details.component';

describe('OutwardDetailsComponent', () => {
  let component: OutwardDetailsComponent;
  let fixture: ComponentFixture<OutwardDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutwardDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutwardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
