import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInwardNoDppfNpsComponent } from './search-inward-no-dppf-nps.component';

describe('SearchInwardNoDppfNpsComponent', () => {
  let component: SearchInwardNoDppfNpsComponent;
  let fixture: ComponentFixture<SearchInwardNoDppfNpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchInwardNoDppfNpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchInwardNoDppfNpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
