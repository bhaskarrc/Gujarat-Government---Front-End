import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTreasuryIndentPreparationComponent } from './sub-treasury-indent-preparation.component';

describe('SubTreasuryIndentPreparationComponent', () => {
  let component: SubTreasuryIndentPreparationComponent;
  let fixture: ComponentFixture<SubTreasuryIndentPreparationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubTreasuryIndentPreparationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubTreasuryIndentPreparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
