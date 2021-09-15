import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpeningBalanceAndPapersOfStampComponent } from './opening-balance-and-papers-of-stamp.component';

describe('OpeningBalanceAndPapersOfStampComponent', () => {
  let component: OpeningBalanceAndPapersOfStampComponent;
  let fixture: ComponentFixture<OpeningBalanceAndPapersOfStampComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpeningBalanceAndPapersOfStampComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpeningBalanceAndPapersOfStampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
