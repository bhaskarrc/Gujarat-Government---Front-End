import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreasuryIndentPreparationComponent } from './treasury-indent-preparation.component';

describe('TreasuryIndentPreparationComponent', () => {
  let component: TreasuryIndentPreparationComponent;
  let fixture: ComponentFixture<TreasuryIndentPreparationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreasuryIndentPreparationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreasuryIndentPreparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
