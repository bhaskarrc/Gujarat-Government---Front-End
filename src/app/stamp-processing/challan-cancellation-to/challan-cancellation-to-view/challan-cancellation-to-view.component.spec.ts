import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallanCancellationToViewComponent } from './challan-cancellation-to-view.component';

describe('ChallanCancellationToViewComponent', () => {
  let component: ChallanCancellationToViewComponent;
  let fixture: ComponentFixture<ChallanCancellationToViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallanCancellationToViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallanCancellationToViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
