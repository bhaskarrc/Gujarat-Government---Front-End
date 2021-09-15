import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptChallanComponent } from './accept-challan.component';

describe('AcceptChallanComponent', () => {
  let component: AcceptChallanComponent;
  let fixture: ComponentFixture<AcceptChallanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptChallanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptChallanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
