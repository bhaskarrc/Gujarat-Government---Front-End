import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallanCancellationStoComponent } from './challan-cancellation-sto.component';

describe('ChallanCancellationStoComponent', () => {
  let component: ChallanCancellationStoComponent;
  let fixture: ComponentFixture<ChallanCancellationStoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallanCancellationStoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallanCancellationStoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
