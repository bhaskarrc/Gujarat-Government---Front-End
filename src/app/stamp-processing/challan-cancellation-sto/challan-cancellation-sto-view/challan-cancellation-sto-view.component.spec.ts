import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallanCancellationStoViewComponent } from './challan-cancellation-sto-view.component';

describe('ChallanCancellationStoViewComponent', () => {
  let component: ChallanCancellationStoViewComponent;
  let fixture: ComponentFixture<ChallanCancellationStoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallanCancellationStoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallanCancellationStoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
