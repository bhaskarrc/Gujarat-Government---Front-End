import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallanCancellationToComponent } from './challan-cancellation-to.component';

describe('ChallanCancellationToComponent', () => {
  let component: ChallanCancellationToComponent;
  let fixture: ComponentFixture<ChallanCancellationToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallanCancellationToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallanCancellationToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
