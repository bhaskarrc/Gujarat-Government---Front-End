import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PprCommentsComponent } from './ppr-comments.component';

describe('PprCommentsComponent', () => {
  let component: PprCommentsComponent;
  let fixture: ComponentFixture<PprCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PprCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PprCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
