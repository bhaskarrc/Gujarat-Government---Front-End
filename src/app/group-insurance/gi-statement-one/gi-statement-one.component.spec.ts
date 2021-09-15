import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiStatementOneComponent } from './gi-statement-one.component';

describe('GiStatementOneComponent', () => {
  let component: GiStatementOneComponent;
  let fixture: ComponentFixture<GiStatementOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiStatementOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiStatementOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
