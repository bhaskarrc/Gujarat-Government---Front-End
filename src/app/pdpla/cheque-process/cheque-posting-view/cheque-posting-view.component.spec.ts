import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequePostingViewComponent } from './cheque-posting-view.component';

describe('ChequePostingViewComponent', () => {
  let component: ChequePostingViewComponent;
  let fixture: ComponentFixture<ChequePostingViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChequePostingViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChequePostingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
