import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTreasuryIndentPreparationViewComponent } from './sub-treasury-indent-preparation-view.component';

describe('SubTreasuryIndentPreparationViewComponent', () => {
  let component: SubTreasuryIndentPreparationViewComponent;
  let fixture: ComponentFixture<SubTreasuryIndentPreparationViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubTreasuryIndentPreparationViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubTreasuryIndentPreparationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
