import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnexureTwoComponent } from './annexure-two.component';

describe('AnnexureTwoComponent', () => {
  let component: AnnexureTwoComponent;
  let fixture: ComponentFixture<AnnexureTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnexureTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnexureTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
