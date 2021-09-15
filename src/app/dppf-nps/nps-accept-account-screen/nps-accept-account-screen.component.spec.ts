import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpsAcceptAccountScreenComponent } from './nps-accept-account-screen.component';

describe('NpsAcceptAccountScreenComponent', () => {
  let component: NpsAcceptAccountScreenComponent;
  let fixture: ComponentFixture<NpsAcceptAccountScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpsAcceptAccountScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpsAcceptAccountScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
