import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiStatementThreeComponent } from './gi-statement-three.component';

describe('GiStatementThreeComponent', () => {
  let component: GiStatementThreeComponent;
  let fixture: ComponentFixture<GiStatementThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiStatementThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiStatementThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
