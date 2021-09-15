import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurposeCreationListComponent } from './purpose-creation-list.component';

describe('PurposeCreationListComponent', () => {
  let component: PurposeCreationListComponent;
  let fixture: ComponentFixture<PurposeCreationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurposeCreationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurposeCreationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
