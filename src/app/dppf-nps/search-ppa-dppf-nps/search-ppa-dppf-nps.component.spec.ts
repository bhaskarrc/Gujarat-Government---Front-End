import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPpaDppfNpsComponent } from './search-ppa-dppf-nps.component';

describe('SearchPpaDppfNpsComponent', () => {
  let component: SearchPpaDppfNpsComponent;
  let fixture: ComponentFixture<SearchPpaDppfNpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPpaDppfNpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPpaDppfNpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
