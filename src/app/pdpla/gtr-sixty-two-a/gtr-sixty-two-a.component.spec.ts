import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GtrSixtyTwoAComponent } from './gtr-sixty-two-a.component';

describe('GtrSixtyTwoAComponent', () => {
  let component: GtrSixtyTwoAComponent;
  let fixture: ComponentFixture<GtrSixtyTwoAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GtrSixtyTwoAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GtrSixtyTwoAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
