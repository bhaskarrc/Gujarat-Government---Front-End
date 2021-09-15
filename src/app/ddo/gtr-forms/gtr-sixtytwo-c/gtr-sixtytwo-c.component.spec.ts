import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GtrSixtytwoCComponent } from './gtr-sixtytwo-c.component';

describe('GtrSixtytwoCComponent', () => {
  let component: GtrSixtytwoCComponent;
  let fixture: ComponentFixture<GtrSixtytwoCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GtrSixtytwoCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GtrSixtytwoCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
