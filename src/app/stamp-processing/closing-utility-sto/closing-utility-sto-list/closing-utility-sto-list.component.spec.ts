import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosingUtilityStoListComponent } from './closing-utility-sto-list.component';

describe('ClosingUtilityStoListComponent', () => {
  let component: ClosingUtilityStoListComponent;
  let fixture: ComponentFixture<ClosingUtilityStoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosingUtilityStoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosingUtilityStoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
