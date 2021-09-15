import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcFormAComponent } from './lc-form-a.component';

describe('LcFormAComponent', () => {
  let component: LcFormAComponent;
  let fixture: ComponentFixture<LcFormAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcFormAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcFormAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
