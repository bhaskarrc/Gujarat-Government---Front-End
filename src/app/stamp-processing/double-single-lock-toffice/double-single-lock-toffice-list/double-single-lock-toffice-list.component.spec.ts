import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleSingleLockTofficeListComponent } from './double-single-lock-toffice-list.component';

describe('DoubleSingleLockTofficeListComponent', () => {
  let component: DoubleSingleLockTofficeListComponent;
  let fixture: ComponentFixture<DoubleSingleLockTofficeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoubleSingleLockTofficeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleSingleLockTofficeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
