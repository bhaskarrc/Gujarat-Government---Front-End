import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTreasuryPostedChallanComponent } from './sub-treasury-posted-challan.component';

describe('SubTreasuryPostedChallanComponent', () => {
  let component: SubTreasuryPostedChallanComponent;
  let fixture: ComponentFixture<SubTreasuryPostedChallanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubTreasuryPostedChallanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubTreasuryPostedChallanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
