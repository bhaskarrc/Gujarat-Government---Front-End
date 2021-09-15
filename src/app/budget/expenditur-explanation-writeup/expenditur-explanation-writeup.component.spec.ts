import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenditurExplanationWriteupComponent } from './expenditur-explanation-writeup.component';

describe('ExpenditurExplanationWriteupComponent', () => {
  let component: ExpenditurExplanationWriteupComponent;
  let fixture: ComponentFixture<ExpenditurExplanationWriteupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenditurExplanationWriteupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenditurExplanationWriteupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
