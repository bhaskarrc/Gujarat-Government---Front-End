import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiStatementTwoComponent } from './gi-statement-two.component';

describe('GiStatementTwoComponent', () => {
  let component: GiStatementTwoComponent;
  let fixture: ComponentFixture<GiStatementTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiStatementTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiStatementTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
