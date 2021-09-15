import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDoubleLockTofficeViewComponent } from './single-double-lock-toffice-view.component';

describe('SingleDoubleLockTofficeViewComponent', () => {
  let component: SingleDoubleLockTofficeViewComponent;
  let fixture: ComponentFixture<SingleDoubleLockTofficeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleDoubleLockTofficeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleDoubleLockTofficeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
