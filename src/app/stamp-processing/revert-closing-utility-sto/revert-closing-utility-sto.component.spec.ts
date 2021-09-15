import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevertClosingUtilityStoComponent } from './revert-closing-utility-sto.component';

describe('RevertClosingUtilityStoComponent', () => {
  let component: RevertClosingUtilityStoComponent;
  let fixture: ComponentFixture<RevertClosingUtilityStoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevertClosingUtilityStoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevertClosingUtilityStoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
