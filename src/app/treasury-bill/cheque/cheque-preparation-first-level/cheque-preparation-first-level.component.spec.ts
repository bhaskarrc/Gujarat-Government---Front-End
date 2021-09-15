import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequePreparationFirstLevelComponent } from './cheque-preparation-first-level.component';

describe('ChequePreparationFirstLevelComponent', () => {
  let component: ChequePreparationFirstLevelComponent;
  let fixture: ComponentFixture<ChequePreparationFirstLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChequePreparationFirstLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChequePreparationFirstLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
