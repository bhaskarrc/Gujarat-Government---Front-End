import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtrFiveComponent } from './btr-five.component';

describe('BtrFiveComponent', () => {
  let component: BtrFiveComponent;
  let fixture: ComponentFixture<BtrFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtrFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtrFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
