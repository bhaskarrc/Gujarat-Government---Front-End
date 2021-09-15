import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPostedChallanViewComponent } from './all-posted-challan-view.component';

describe('AllPostedChallanViewComponent', () => {
  let component: AllPostedChallanViewComponent;
  let fixture: ComponentFixture<AllPostedChallanViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPostedChallanViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPostedChallanViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
