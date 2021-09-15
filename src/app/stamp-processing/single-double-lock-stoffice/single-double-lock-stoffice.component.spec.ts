import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDoubleLockStofficeComponent } from './single-double-lock-stoffice.component';

describe('SingleDoubleLockStofficeComponent', () => {
  let component: SingleDoubleLockStofficeComponent;
  let fixture: ComponentFixture<SingleDoubleLockStofficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleDoubleLockStofficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleDoubleLockStofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
