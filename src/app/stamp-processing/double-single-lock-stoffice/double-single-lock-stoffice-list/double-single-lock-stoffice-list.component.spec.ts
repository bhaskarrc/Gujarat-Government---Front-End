import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleSingleLockStofficeListComponent } from './double-single-lock-stoffice-list.component';

describe('DoubleSingleLockStofficeListComponent', () => {
  let component: DoubleSingleLockStofficeListComponent;
  let fixture: ComponentFixture<DoubleSingleLockStofficeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoubleSingleLockStofficeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleSingleLockStofficeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
