import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcAdvicePreparationEditComponent } from './lc-advice-preparation-edit.component';

describe('LcAdvicePreparationEditComponent', () => {
  let component: LcAdvicePreparationEditComponent;
  let fixture: ComponentFixture<LcAdvicePreparationEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcAdvicePreparationEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcAdvicePreparationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
