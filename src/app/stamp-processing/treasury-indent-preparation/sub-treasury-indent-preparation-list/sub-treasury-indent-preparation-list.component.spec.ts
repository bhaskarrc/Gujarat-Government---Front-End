import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTreasuryIndentPreparationListComponent } from './sub-treasury-indent-preparation-list.component';

describe('SubTreasuryIndentPreparationListComponent', () => {
  let component: SubTreasuryIndentPreparationListComponent;
  let fixture: ComponentFixture<SubTreasuryIndentPreparationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubTreasuryIndentPreparationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubTreasuryIndentPreparationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
