import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpeningBalanceAndPapersOfStampViewComponent } from './opening-balance-and-papers-of-stamp-view.component';

describe('OpeningBalanceAndPapersOfStampViewComponent', () => {
  let component: OpeningBalanceAndPapersOfStampViewComponent;
  let fixture: ComponentFixture<OpeningBalanceAndPapersOfStampViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpeningBalanceAndPapersOfStampViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpeningBalanceAndPapersOfStampViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
