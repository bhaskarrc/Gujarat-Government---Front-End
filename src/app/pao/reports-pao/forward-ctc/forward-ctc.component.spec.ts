import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForwardCtcComponent } from './forward-ctc.component';

describe('ForwardCtcComponent', () => {
  let component: ForwardCtcComponent;
  let fixture: ComponentFixture<ForwardCtcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForwardCtcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForwardCtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
