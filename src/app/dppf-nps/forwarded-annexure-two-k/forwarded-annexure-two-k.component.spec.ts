import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForwardedAnnexureTwoKComponent } from './forwarded-annexure-two-k.component';

describe('ForwardedAnnexureTwoKComponent', () => {
  let component: ForwardedAnnexureTwoKComponent;
  let fixture: ComponentFixture<ForwardedAnnexureTwoKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForwardedAnnexureTwoKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForwardedAnnexureTwoKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
