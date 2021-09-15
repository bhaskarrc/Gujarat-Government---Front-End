import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GtrSixtytwoBComponent } from './gtr-sixtytwo-b.component';

describe('GtrSixtytwoBComponent', () => {
  let component: GtrSixtytwoBComponent;
  let fixture: ComponentFixture<GtrSixtytwoBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GtrSixtytwoBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GtrSixtytwoBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
