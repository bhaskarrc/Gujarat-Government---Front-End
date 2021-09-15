import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RtiVigilanceBranchComponent } from './rti-vigilance-branch.component';

describe('RtiVigilanceBranchComponent', () => {
  let component: RtiVigilanceBranchComponent;
  let fixture: ComponentFixture<RtiVigilanceBranchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RtiVigilanceBranchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RtiVigilanceBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
