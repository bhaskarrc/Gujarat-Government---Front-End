import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchMappingAndTransferComponent } from './branch-mapping-and-transfer.component';

describe('BranchMappingAndTransferComponent', () => {
  let component: BranchMappingAndTransferComponent;
  let fixture: ComponentFixture<BranchMappingAndTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchMappingAndTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchMappingAndTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
