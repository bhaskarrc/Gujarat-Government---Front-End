import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequePostingComponent } from './cheque-posting.component';

describe('ChequePostingComponent', () => {
  let component: ChequePostingComponent;
  let fixture: ComponentFixture<ChequePostingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChequePostingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChequePostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
