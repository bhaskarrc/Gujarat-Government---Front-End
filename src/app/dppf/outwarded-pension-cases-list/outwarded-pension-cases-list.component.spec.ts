import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutwardedPensionCasesListComponent } from './outwarded-pension-cases-list.component';

describe('OutwardedPensionCasesListComponent', () => {
  let component: OutwardedPensionCasesListComponent;
  let fixture: ComponentFixture<OutwardedPensionCasesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutwardedPensionCasesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutwardedPensionCasesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
