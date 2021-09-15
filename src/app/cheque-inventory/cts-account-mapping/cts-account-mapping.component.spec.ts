import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtsAccountMappingComponent } from './cts-account-mapping.component';

describe('CtsAccountMappingComponent', () => {
  let component: CtsAccountMappingComponent;
  let fixture: ComponentFixture<CtsAccountMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtsAccountMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtsAccountMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
