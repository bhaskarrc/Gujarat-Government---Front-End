import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassWiseRegularSalaryViewComponent } from './class-wise-regular-salary-view.component';

describe('ClassWiseRegularSalaryViewComponent', () => {
  let component: ClassWiseRegularSalaryViewComponent;
  let fixture: ComponentFixture<ClassWiseRegularSalaryViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassWiseRegularSalaryViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassWiseRegularSalaryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
