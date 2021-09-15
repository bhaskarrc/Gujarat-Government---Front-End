import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeSuperintendentComponent } from './office-superintendent-saved-cases.component';

describe('OfficeSuperintendentComponent', () => {
  let component: OfficeSuperintendentComponent;
  let fixture: ComponentFixture<OfficeSuperintendentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficeSuperintendentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeSuperintendentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
