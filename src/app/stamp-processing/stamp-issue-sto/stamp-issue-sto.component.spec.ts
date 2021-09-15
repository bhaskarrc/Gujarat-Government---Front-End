import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StampIssueStoComponent } from './stamp-issue-sto.component';

describe('StampIssueStoComponent', () => {
  let component: StampIssueStoComponent;
  let fixture: ComponentFixture<StampIssueStoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StampIssueStoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StampIssueStoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
