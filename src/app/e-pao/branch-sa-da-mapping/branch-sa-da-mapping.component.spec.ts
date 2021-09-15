import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchSaDaMappingComponent } from './branch-sa-da-mapping.component';

describe('BranchSaDaMappingComponent', () => {
  let component: BranchSaDaMappingComponent;
  let fixture: ComponentFixture<BranchSaDaMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchSaDaMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchSaDaMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
