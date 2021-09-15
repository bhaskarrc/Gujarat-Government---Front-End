import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StampIndentPreparationPrintComponent } from './stamp-indent-preparation-print.component';

describe('StampIndentPreparationPrintComponent', () => {
  let component: StampIndentPreparationPrintComponent;
  let fixture: ComponentFixture<StampIndentPreparationPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StampIndentPreparationPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StampIndentPreparationPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
