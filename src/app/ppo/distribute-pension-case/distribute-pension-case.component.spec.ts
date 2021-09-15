import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributePensionCaseComponent } from './distribute-pension-case.component';

describe('DistributePensionCaseComponent', () => {
  let component: DistributePensionCaseComponent;
  let fixture: ComponentFixture<DistributePensionCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributePensionCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributePensionCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
