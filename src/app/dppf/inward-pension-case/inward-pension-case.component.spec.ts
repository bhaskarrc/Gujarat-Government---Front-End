import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InwardPensionCaseComponent } from './inward-pension-case.component';

describe('InwardPensionCaseComponent', () => {
  let component: InwardPensionCaseComponent;
  let fixture: ComponentFixture<InwardPensionCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InwardPensionCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InwardPensionCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
