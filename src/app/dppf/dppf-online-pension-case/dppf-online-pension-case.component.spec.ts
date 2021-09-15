import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DppfOnlinePensionCaseComponent } from './dppf-online-pension-case.component';

describe('DppfOnlinePensionCaseComponent', () => {
  let component: DppfOnlinePensionCaseComponent;
  let fixture: ComponentFixture<DppfOnlinePensionCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DppfOnlinePensionCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DppfOnlinePensionCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
