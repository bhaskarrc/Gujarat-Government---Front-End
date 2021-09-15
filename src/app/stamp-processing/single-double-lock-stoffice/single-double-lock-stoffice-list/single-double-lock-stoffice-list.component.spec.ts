import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDoubleLockStofficeListComponent } from './single-double-lock-stoffice-list.component';

describe('SingleDoubleLockStofficeListComponent', () => {
  let component: SingleDoubleLockStofficeListComponent;
  let fixture: ComponentFixture<SingleDoubleLockStofficeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleDoubleLockStofficeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleDoubleLockStofficeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
