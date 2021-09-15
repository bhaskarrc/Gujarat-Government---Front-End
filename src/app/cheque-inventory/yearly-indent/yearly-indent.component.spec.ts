import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearlyIndentComponent } from './yearly-indent.component';

describe('YearlyIndentComponent', () => {
  let component: YearlyIndentComponent;
  let fixture: ComponentFixture<YearlyIndentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearlyIndentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearlyIndentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
