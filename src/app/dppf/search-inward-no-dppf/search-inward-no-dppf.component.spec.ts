import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInwardNoDppfComponent } from './search-inward-no-dppf.component';

describe('SearchInwardNoDppfComponent', () => {
  let component: SearchInwardNoDppfComponent;
  let fixture: ComponentFixture<SearchInwardNoDppfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchInwardNoDppfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchInwardNoDppfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
