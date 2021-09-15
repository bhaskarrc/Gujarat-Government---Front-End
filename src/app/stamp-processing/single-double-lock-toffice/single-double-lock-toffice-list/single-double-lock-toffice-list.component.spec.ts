import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDoubleLockTofficeListComponent } from './single-double-lock-toffice-list.component';

describe('SingleDoubleLockTofficeListComponent', () => {
  let component: SingleDoubleLockTofficeListComponent;
  let fixture: ComponentFixture<SingleDoubleLockTofficeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleDoubleLockTofficeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleDoubleLockTofficeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
