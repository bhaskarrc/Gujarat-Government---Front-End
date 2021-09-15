import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevertClosingUtilityToComponent } from './revert-closing-utility-to.component';

describe('RevertClosingUtilityToComponent', () => {
  let component: RevertClosingUtilityToComponent;
  let fixture: ComponentFixture<RevertClosingUtilityToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevertClosingUtilityToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevertClosingUtilityToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
