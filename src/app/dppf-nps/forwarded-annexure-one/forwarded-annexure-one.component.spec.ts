import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForwardedAnnexureOneComponent } from './forwarded-annexure-one.component';

describe('ForwardedAnnexureOneComponent', () => {
  let component: ForwardedAnnexureOneComponent;
  let fixture: ComponentFixture<ForwardedAnnexureOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForwardedAnnexureOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForwardedAnnexureOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
