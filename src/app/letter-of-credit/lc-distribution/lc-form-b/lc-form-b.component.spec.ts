import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcFormBComponent } from './lc-form-b.component';

describe('LcFormBComponent', () => {
  let component: LcFormBComponent;
  let fixture: ComponentFixture<LcFormBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcFormBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcFormBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
