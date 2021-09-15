import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPostedChallanComponent } from './all-posted-challan.component';

describe('AllPostedChallanComponent', () => {
  let component: AllPostedChallanComponent;
  let fixture: ComponentFixture<AllPostedChallanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPostedChallanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPostedChallanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
