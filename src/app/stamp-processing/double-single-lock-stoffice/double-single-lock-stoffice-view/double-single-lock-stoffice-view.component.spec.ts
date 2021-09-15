import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleSingleLockStofficeViewComponent } from './double-single-lock-stoffice-view.component';

describe('DoubleSingleLockStofficeViewComponent', () => {
  let component: DoubleSingleLockStofficeViewComponent;
  let fixture: ComponentFixture<DoubleSingleLockStofficeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoubleSingleLockStofficeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleSingleLockStofficeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
