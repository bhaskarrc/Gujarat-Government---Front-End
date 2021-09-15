import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpsYearEndProcessComponent } from './nps-year-end-process.component';

describe('NpsYearEndProcessComponent', () => {
  let component: NpsYearEndProcessComponent;
  let fixture: ComponentFixture<NpsYearEndProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpsYearEndProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpsYearEndProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
