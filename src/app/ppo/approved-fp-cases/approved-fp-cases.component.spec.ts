import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedFpCasesComponent } from './approved-fp-cases.component';

describe('ApprovedFpCasesComponent', () => {
  let component: ApprovedFpCasesComponent;
  let fixture: ComponentFixture<ApprovedFpCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovedFpCasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedFpCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
