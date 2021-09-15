import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearEndProcessHbaComponent } from './year-end-process-hba.component';

describe('YearEndProcessHbaComponent', () => {
  let component: YearEndProcessHbaComponent;
  let fixture: ComponentFixture<YearEndProcessHbaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearEndProcessHbaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearEndProcessHbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
