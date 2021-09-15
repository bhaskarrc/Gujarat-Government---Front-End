import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptAccountScreenComponent } from './accept-account-screen.component';

describe('AcceptAccountScreenComponent', () => {
  let component: AcceptAccountScreenComponent;
  let fixture: ComponentFixture<AcceptAccountScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptAccountScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptAccountScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
