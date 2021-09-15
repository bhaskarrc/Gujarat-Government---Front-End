import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurpriseVerificationToListComponent } from './surprise-verification-to-list.component';

describe('SurpriseVerificationToListComponent', () => {
  let component: SurpriseVerificationToListComponent;
  let fixture: ComponentFixture<SurpriseVerificationToListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurpriseVerificationToListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurpriseVerificationToListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
