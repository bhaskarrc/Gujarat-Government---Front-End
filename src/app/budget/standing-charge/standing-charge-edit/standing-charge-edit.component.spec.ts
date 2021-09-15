import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandingChargeEditComponent } from './standing-charge-edit.component';

describe('StandingChargeEditComponent', () => {
  let component: StandingChargeEditComponent;
  let fixture: ComponentFixture<StandingChargeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandingChargeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandingChargeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
