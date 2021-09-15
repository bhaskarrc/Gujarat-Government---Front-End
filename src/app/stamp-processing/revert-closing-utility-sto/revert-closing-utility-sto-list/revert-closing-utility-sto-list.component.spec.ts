import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevertClosingUtilityStoListComponent } from './revert-closing-utility-sto-list.component';

describe('RevertClosingUtilityStoListComponent', () => {
  let component: RevertClosingUtilityStoListComponent;
  let fixture: ComponentFixture<RevertClosingUtilityStoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevertClosingUtilityStoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevertClosingUtilityStoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
