import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GtrFiveSixComponent } from './gtr-five-six.component';

describe('GtrFiveSixComponent', () => {
  let component: GtrFiveSixComponent;
  let fixture: ComponentFixture<GtrFiveSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GtrFiveSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GtrFiveSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
