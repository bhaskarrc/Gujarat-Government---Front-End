import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivedAnnexureTwoKComponent } from './received-annexure-two-k.component';

describe('ReceivedAnnexureTwoKComponent', () => {
  let component: ReceivedAnnexureTwoKComponent;
  let fixture: ComponentFixture<ReceivedAnnexureTwoKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivedAnnexureTwoKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivedAnnexureTwoKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
