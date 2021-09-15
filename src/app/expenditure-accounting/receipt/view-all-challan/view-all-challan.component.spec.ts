import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllChallanComponent } from './view-all-challan.component';

describe('ViewAllChallanComponent', () => {
  let component: ViewAllChallanComponent;
  let fixture: ComponentFixture<ViewAllChallanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllChallanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllChallanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
