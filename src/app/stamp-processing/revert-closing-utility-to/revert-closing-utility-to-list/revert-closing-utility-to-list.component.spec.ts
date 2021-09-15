import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevertClosingUtilityToListComponent } from './revert-closing-utility-to-list.component';

describe('RevertClosingUtilityToListComponent', () => {
  let component: RevertClosingUtilityToListComponent;
  let fixture: ComponentFixture<RevertClosingUtilityToListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevertClosingUtilityToListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevertClosingUtilityToListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
