import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreasuryIndentPreparationViewComponent } from './treasury-indent-preparation-view.component';

describe('TreasuryIndentPreparationViewComponent', () => {
  let component: TreasuryIndentPreparationViewComponent;
  let fixture: ComponentFixture<TreasuryIndentPreparationViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreasuryIndentPreparationViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreasuryIndentPreparationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
