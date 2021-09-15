import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StampIssueStoViewComponent } from './stamp-issue-sto-view.component';

describe('StampIssueStoViewComponent', () => {
  let component: StampIssueStoViewComponent;
  let fixture: ComponentFixture<StampIssueStoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StampIssueStoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StampIssueStoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
