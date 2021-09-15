import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlaDesignationListComponent } from './mla-designation-list.component';

describe('MlaDesignationListComponent', () => {
  let component: MlaDesignationListComponent;
  let fixture: ComponentFixture<MlaDesignationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlaDesignationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlaDesignationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
