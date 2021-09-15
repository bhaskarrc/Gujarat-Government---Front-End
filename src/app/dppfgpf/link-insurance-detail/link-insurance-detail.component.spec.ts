import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkInsuranceDetailComponent } from './link-insurance-detail.component';

describe('LinkInsuranceDetailComponent', () => {
  let component: LinkInsuranceDetailComponent;
  let fixture: ComponentFixture<LinkInsuranceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkInsuranceDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkInsuranceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
