import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptanceCriteriaComponent } from './acceptance-criteria.component';

describe('AcceptanceCriteriaComponent', () => {
  let component: AcceptanceCriteriaComponent;
  let fixture: ComponentFixture<AcceptanceCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptanceCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptanceCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
