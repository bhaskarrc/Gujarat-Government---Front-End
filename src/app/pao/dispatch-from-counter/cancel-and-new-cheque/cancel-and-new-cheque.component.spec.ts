import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelAndNewChequeComponent } from './cancel-and-new-cheque.component';

describe('CancelAndNewChequeComponent', () => {
  let component: CancelAndNewChequeComponent;
  let fixture: ComponentFixture<CancelAndNewChequeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelAndNewChequeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelAndNewChequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
