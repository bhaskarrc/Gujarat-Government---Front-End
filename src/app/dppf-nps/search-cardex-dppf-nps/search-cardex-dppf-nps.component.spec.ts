import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCardexDppfNpsComponent } from './search-cardex-dppf-nps.component';

describe('SearchCardexDppfNpsComponent', () => {
  let component: SearchCardexDppfNpsComponent;
  let fixture: ComponentFixture<SearchCardexDppfNpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCardexDppfNpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCardexDppfNpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
