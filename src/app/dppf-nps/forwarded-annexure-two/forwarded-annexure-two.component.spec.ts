import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForwardedAnnexureTwoComponent } from './forwarded-annexure-two.component';

describe('ForwardedAnnexureTwoComponent', () => {
  let component: ForwardedAnnexureTwoComponent;
  let fixture: ComponentFixture<ForwardedAnnexureTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForwardedAnnexureTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForwardedAnnexureTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
