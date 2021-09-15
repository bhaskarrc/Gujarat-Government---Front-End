import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndentNumberViewComponent } from './indent-number-view.component';

describe('IndentNumberViewComponent', () => {
  let component: IndentNumberViewComponent;
  let fixture: ComponentFixture<IndentNumberViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndentNumberViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndentNumberViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
