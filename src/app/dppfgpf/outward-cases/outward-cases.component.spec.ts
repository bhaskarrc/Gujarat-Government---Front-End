import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutwardCasesComponent } from './outward-cases.component';

describe('OutwardCasesComponent', () => {
  let component: OutwardCasesComponent;
  let fixture: ComponentFixture<OutwardCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutwardCasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutwardCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
