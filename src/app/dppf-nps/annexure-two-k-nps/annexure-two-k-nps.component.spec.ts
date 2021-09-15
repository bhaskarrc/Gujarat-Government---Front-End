import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnexureTwoKNpsComponent } from './annexure-two-k-nps.component';

describe('AnnexureTwoKNpsComponent', () => {
  let component: AnnexureTwoKNpsComponent;
  let fixture: ComponentFixture<AnnexureTwoKNpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnexureTwoKNpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnexureTwoKNpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
