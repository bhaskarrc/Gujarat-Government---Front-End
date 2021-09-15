import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurposeCreationComponent } from './purpose-creation.component';

describe('PurposeCreationComponent', () => {
  let component: PurposeCreationComponent;
  let fixture: ComponentFixture<PurposeCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurposeCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurposeCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
