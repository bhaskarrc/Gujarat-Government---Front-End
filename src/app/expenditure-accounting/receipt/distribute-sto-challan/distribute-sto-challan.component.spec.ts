import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributeStoChallanComponent } from './distribute-sto-challan.component';

describe('DistributeStoChallanComponent', () => {
  let component: DistributeStoChallanComponent;
  let fixture: ComponentFixture<DistributeStoChallanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributeStoChallanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributeStoChallanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
