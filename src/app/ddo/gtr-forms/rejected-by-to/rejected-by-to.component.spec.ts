import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedByToComponent } from './rejected-by-to.component';

describe('RejectedByToComponent', () => {
  let component: RejectedByToComponent;
  let fixture: ComponentFixture<RejectedByToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejectedByToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectedByToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
