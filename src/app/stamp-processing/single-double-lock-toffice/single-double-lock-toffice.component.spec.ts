import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDoubleLockTofficeComponent } from './single-double-lock-toffice.component';

describe('SingleDoubleLockTofficeComponent', () => {
  let component: SingleDoubleLockTofficeComponent;
  let fixture: ComponentFixture<SingleDoubleLockTofficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleDoubleLockTofficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleDoubleLockTofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
