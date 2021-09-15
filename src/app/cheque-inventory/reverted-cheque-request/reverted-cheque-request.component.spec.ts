import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevertedChequeRequestComponent } from './reverted-cheque-request.component';

describe('RevertedChequeRequestComponent', () => {
  let component: RevertedChequeRequestComponent;
  let fixture: ComponentFixture<RevertedChequeRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevertedChequeRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevertedChequeRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
