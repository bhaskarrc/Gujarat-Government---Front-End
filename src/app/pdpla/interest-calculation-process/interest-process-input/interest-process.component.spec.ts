import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestProcessComponent } from './interest-process.component';

describe('InterestProcessComponent', () => {
  let component: InterestProcessComponent;
  let fixture: ComponentFixture<InterestProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
