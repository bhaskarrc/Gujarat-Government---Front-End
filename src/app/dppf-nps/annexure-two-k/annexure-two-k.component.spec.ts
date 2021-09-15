import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnexureTwoKComponent } from './annexure-two-k.component';

describe('AnnexureTwoKComponent', () => {
  let component: AnnexureTwoKComponent;
  let fixture: ComponentFixture<AnnexureTwoKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnexureTwoKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnexureTwoKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
