import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestNdcDetailsHbaComponent } from './interest-ndc-details-hba.component';

describe('InterestNdcDetailsHbaComponent', () => {
  let component: InterestNdcDetailsHbaComponent;
  let fixture: ComponentFixture<InterestNdcDetailsHbaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestNdcDetailsHbaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestNdcDetailsHbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
