import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurposeCreationPopUpComponent } from './purpose-creation-pop-up.component';

describe('PurposeCreationPopUpComponent', () => {
  let component: PurposeCreationPopUpComponent;
  let fixture: ComponentFixture<PurposeCreationPopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurposeCreationPopUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurposeCreationPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
