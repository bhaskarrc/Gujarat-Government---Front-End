import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEmployeeDppfNpsComponent } from './search-employee-dppf-nps.component';

describe('SearchEmployeeDppfNpsComponent', () => {
  let component: SearchEmployeeDppfNpsComponent;
  let fixture: ComponentFixture<SearchEmployeeDppfNpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchEmployeeDppfNpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchEmployeeDppfNpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
