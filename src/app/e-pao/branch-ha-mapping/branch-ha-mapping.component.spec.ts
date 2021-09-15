import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchHaMappingComponent } from './branch-ha-mapping.component';

describe('BranchHaMappingComponent', () => {
  let component: BranchHaMappingComponent;
  let fixture: ComponentFixture<BranchHaMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchHaMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchHaMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
