import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DppfSearchEmployeeNumberComponent } from './dppf-search-employee-number.component';

describe('DppfSearchEmployeeNumberComponent', () => {
  let component: DppfSearchEmployeeNumberComponent;
  let fixture: ComponentFixture<DppfSearchEmployeeNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DppfSearchEmployeeNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DppfSearchEmployeeNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
