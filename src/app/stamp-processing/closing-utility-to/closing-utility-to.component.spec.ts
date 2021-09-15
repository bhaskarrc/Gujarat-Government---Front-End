import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosingUtilityToComponent } from './closing-utility-to.component';

describe('ClosingUtilityToComponent', () => {
  let component: ClosingUtilityToComponent;
  let fixture: ComponentFixture<ClosingUtilityToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosingUtilityToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosingUtilityToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
