import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiPlusMinusStatementComponent } from './gi-plus-minus-statement.component';

describe('GiPlusMinusStatementComponent', () => {
  let component: GiPlusMinusStatementComponent;
  let fixture: ComponentFixture<GiPlusMinusStatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiPlusMinusStatementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiPlusMinusStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
