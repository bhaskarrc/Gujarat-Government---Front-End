import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconciliationProperComponent } from './reconciliation-proper.component';

describe('ReconciliationProperComponent', () => {
  let component: ReconciliationProperComponent;
  let fixture: ComponentFixture<ReconciliationProperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReconciliationProperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReconciliationProperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
