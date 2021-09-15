import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcStatementComponent } from './lc-statement.component';

describe('LcStatementComponent', () => {
  let component: LcStatementComponent;
  let fixture: ComponentFixture<LcStatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcStatementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
