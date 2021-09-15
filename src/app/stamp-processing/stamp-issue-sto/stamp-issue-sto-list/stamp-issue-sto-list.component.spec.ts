import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StampIssueStoListComponent } from './stamp-issue-sto-list.component';

describe('StampIssueStoListComponent', () => {
  let component: StampIssueStoListComponent;
  let fixture: ComponentFixture<StampIssueStoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StampIssueStoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StampIssueStoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
