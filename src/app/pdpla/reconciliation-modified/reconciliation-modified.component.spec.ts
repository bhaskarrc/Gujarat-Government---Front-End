import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconciliationModifiedComponent } from './reconciliation-modified.component';

describe('ReconciliationModifiedComponent', () => {
  let component: ReconciliationModifiedComponent;
  let fixture: ComponentFixture<ReconciliationModifiedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReconciliationModifiedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReconciliationModifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
