import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeReprintComponent } from './cheque-reprint.component';

describe('ChequeReprintComponent', () => {
  let component: ChequeReprintComponent;
  let fixture: ComponentFixture<ChequeReprintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChequeReprintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChequeReprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
