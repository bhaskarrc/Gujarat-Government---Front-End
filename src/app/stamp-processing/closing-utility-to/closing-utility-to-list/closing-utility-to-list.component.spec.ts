import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosingUtilityToListComponent } from './closing-utility-to-list.component';

describe('ClosingUtilityToListComponent', () => {
  let component: ClosingUtilityToListComponent;
  let fixture: ComponentFixture<ClosingUtilityToListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosingUtilityToListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosingUtilityToListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
