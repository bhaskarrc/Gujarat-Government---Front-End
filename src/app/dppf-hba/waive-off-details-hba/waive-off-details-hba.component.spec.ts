import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaiveOffDetailsHbaComponent } from './waive-off-details-hba.component';

describe('WaiveOffDetailsHbaComponent', () => {
  let component: WaiveOffDetailsHbaComponent;
  let fixture: ComponentFixture<WaiveOffDetailsHbaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaiveOffDetailsHbaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaiveOffDetailsHbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
