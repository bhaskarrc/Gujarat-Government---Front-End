import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanMigrationComponent } from './loan-migration.component';

describe('LoanMigrationComponent', () => {
  let component: LoanMigrationComponent;
  let fixture: ComponentFixture<LoanMigrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanMigrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanMigrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
