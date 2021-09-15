import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreasuryIndentPreparationListComponent } from './treasury-indent-preparation-list.component';

describe('TreasuryIndentPreparationListComponent', () => {
  let component: TreasuryIndentPreparationListComponent;
  let fixture: ComponentFixture<TreasuryIndentPreparationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreasuryIndentPreparationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreasuryIndentPreparationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
