import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleSingleLockTofficeComponent } from './double-single-lock-toffice.component';

describe('DoubleSingleLockTofficeComponent', () => {
  let component: DoubleSingleLockTofficeComponent;
  let fixture: ComponentFixture<DoubleSingleLockTofficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoubleSingleLockTofficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleSingleLockTofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
