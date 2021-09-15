import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchMappingComponent } from './branch-mapping.component';

describe('BranchMappingComponent', () => {
  let component: BranchMappingComponent;
  let fixture: ComponentFixture<BranchMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
