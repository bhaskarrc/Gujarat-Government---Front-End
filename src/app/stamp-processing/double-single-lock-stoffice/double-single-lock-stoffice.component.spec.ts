import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleSingleLockStofficeComponent } from './double-single-lock-stoffice.component';

describe('DoubleSingleLockStofficeComponent', () => {
  let component: DoubleSingleLockStofficeComponent;
  let fixture: ComponentFixture<DoubleSingleLockStofficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoubleSingleLockStofficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleSingleLockStofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
