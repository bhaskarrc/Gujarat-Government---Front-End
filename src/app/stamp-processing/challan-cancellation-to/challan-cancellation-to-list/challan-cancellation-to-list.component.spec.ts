import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallanCancellationToListComponent } from './challan-cancellation-to-list.component';

describe('ChallanCancellationToListComponent', () => {
  let component: ChallanCancellationToListComponent;
  let fixture: ComponentFixture<ChallanCancellationToListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallanCancellationToListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallanCancellationToListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
