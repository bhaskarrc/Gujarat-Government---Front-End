import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchReferenceNumberDppfComponent } from './search-reference-number-dppf.component';

describe('SearchReferenceNumberDppfComponent', () => {
  let component: SearchReferenceNumberDppfComponent;
  let fixture: ComponentFixture<SearchReferenceNumberDppfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchReferenceNumberDppfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchReferenceNumberDppfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
