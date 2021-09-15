import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutwardPensionCasesComponent } from './outward-pension-cases.component';

describe('OutwardPensionCasesComponent', () => {
  let component: OutwardPensionCasesComponent;
  let fixture: ComponentFixture<OutwardPensionCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutwardPensionCasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutwardPensionCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
