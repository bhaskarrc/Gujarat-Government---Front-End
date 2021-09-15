import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GtrSixtyThreeBillsComponent } from './gtr-sixty-three-bills.component';

describe('GtrSixtyThreeBillsComponent', () => {
  let component: GtrSixtyThreeBillsComponent;
  let fixture: ComponentFixture<GtrSixtyThreeBillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GtrSixtyThreeBillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GtrSixtyThreeBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
