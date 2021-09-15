import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReDistributeStoChallanComponent } from './re-distribute-sto-challan.component';

describe('ReDistributeStoChallanComponent', () => {
  let component: ReDistributeStoChallanComponent;
  let fixture: ComponentFixture<ReDistributeStoChallanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReDistributeStoChallanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReDistributeStoChallanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
