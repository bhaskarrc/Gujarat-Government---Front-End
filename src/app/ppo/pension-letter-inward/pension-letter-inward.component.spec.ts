import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PensionLetterInwardComponent } from './pension-letter-inward.component';

describe('PensionLetterInwardComponent', () => {
  let component: PensionLetterInwardComponent;
  let fixture: ComponentFixture<PensionLetterInwardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PensionLetterInwardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PensionLetterInwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
