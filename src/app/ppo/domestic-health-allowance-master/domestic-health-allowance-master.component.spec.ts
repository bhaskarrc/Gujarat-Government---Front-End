import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomesticHealthAllowanceMasterComponent } from './domestic-health-allowance-master.component';

describe('DomesticHealthAllowanceMasterComponent', () => {
  let component: DomesticHealthAllowanceMasterComponent;
  let fixture: ComponentFixture<DomesticHealthAllowanceMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomesticHealthAllowanceMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomesticHealthAllowanceMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
