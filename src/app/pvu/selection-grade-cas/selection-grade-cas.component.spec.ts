import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionGradeCasComponent } from './selection-grade-cas.component';

describe('SelectionGradeCasComponent', () => {
  let component: SelectionGradeCasComponent;
  let fixture: ComponentFixture<SelectionGradeCasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionGradeCasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionGradeCasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
