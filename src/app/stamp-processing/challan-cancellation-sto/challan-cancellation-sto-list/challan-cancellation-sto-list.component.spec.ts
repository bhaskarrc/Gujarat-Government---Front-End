import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallanCancellationStoListComponent } from './challan-cancellation-sto-list.component';

describe('ChallanCancellationStoListComponent', () => {
  let component: ChallanCancellationStoListComponent;
  let fixture: ComponentFixture<ChallanCancellationStoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallanCancellationStoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallanCancellationStoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
