import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutwardCaseHbaComponent } from './outward-case-hba.component';

describe('OutwardCaseHbaComponent', () => {
  let component: OutwardCaseHbaComponent;
  let fixture: ComponentFixture<OutwardCaseHbaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutwardCaseHbaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutwardCaseHbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
