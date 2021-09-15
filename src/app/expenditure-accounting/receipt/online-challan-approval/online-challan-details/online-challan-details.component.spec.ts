import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineChallanDetailsComponent } from './online-challan-details.component';

describe('OnlineChallanDetailsComponent', () => {
  let component: OnlineChallanDetailsComponent;
  let fixture: ComponentFixture<OnlineChallanDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineChallanDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineChallanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
