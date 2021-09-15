import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiAnnexureBComponent } from './gi-annexure-b.component';

describe('GiAnnexureBComponent', () => {
  let component: GiAnnexureBComponent;
  let fixture: ComponentFixture<GiAnnexureBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiAnnexureBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiAnnexureBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
