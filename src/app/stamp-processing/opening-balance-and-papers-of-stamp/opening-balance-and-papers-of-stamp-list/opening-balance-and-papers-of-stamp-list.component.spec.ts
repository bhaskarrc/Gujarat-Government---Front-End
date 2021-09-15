import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpeningBalanceAndPapersOfStampListComponent } from './opening-balance-and-papers-of-stamp-list.component';

describe('OpeningBalanceAndPapersOfStampListComponent', () => {
  let component: OpeningBalanceAndPapersOfStampListComponent;
  let fixture: ComponentFixture<OpeningBalanceAndPapersOfStampListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpeningBalanceAndPapersOfStampListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpeningBalanceAndPapersOfStampListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
