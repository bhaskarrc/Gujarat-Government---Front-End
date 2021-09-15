import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinitiateUnsuccessfulTransactionComponent } from './reinitiate-unsuccessful-transaction.component';

describe('ReinitiateUnsuccessfulTransactionComponent', () => {
  let component: ReinitiateUnsuccessfulTransactionComponent;
  let fixture: ComponentFixture<ReinitiateUnsuccessfulTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReinitiateUnsuccessfulTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReinitiateUnsuccessfulTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
