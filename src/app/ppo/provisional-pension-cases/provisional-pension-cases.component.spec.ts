import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvisionalPensionCasesComponent } from './provisional-pension-cases.component';

describe('ProvisionalPensionCasesComponent', () => {
  let component: ProvisionalPensionCasesComponent;
  let fixture: ComponentFixture<ProvisionalPensionCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvisionalPensionCasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvisionalPensionCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
