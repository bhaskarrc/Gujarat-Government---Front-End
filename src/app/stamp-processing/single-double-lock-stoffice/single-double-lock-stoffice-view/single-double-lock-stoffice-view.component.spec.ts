import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDoubleLockStofficeViewComponent } from './single-double-lock-stoffice-view.component';

describe('SingleDoubleLockStofficeViewComponent', () => {
  let component: SingleDoubleLockStofficeViewComponent;
  let fixture: ComponentFixture<SingleDoubleLockStofficeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleDoubleLockStofficeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleDoubleLockStofficeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
