import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitChallanComponent } from './split-challan.component';

describe('SplitChallanComponent', () => {
  let component: SplitChallanComponent;
  let fixture: ComponentFixture<SplitChallanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplitChallanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitChallanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
