import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosingUtilityStoComponent } from './closing-utility-sto.component';

describe('ClosingUtilityStoComponent', () => {
  let component: ClosingUtilityStoComponent;
  let fixture: ComponentFixture<ClosingUtilityStoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosingUtilityStoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosingUtilityStoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
