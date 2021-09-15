import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestConformationCaseComponent } from './interest-conformation-case.component';

describe('InterestConformationCaseComponent', () => {
  let component: InterestConformationCaseComponent;
  let fixture: ComponentFixture<InterestConformationCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestConformationCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestConformationCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
