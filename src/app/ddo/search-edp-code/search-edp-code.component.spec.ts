import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEdpCodeComponent } from './search-edp-code.component';

describe('SearchEdpCodeComponent', () => {
  let component: SearchEdpCodeComponent;
  let fixture: ComponentFixture<SearchEdpCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchEdpCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchEdpCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
