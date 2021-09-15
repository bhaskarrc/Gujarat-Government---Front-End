import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantAnnexureOneRegisterSearchCriteriaComponent } from './grant-annexure-one-register-search-criteria.component';

describe('GrantAnnexureOneRegisterSearchCriteriaComponent', () => {
  let component: GrantAnnexureOneRegisterSearchCriteriaComponent;
  let fixture: ComponentFixture<GrantAnnexureOneRegisterSearchCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantAnnexureOneRegisterSearchCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantAnnexureOneRegisterSearchCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
