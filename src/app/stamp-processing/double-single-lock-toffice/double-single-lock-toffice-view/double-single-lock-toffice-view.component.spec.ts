import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleSingleLockTofficeViewComponent } from './double-single-lock-toffice-view.component';

describe('DoubleSingleLockTofficeViewComponent', () => {
  let component: DoubleSingleLockTofficeViewComponent;
  let fixture: ComponentFixture<DoubleSingleLockTofficeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoubleSingleLockTofficeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleSingleLockTofficeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
