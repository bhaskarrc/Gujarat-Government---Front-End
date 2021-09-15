import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnexureAViewComponent } from './annexure-a-view.component';

describe('AnnexureAViewComponent', () => {
  let component: AnnexureAViewComponent;
  let fixture: ComponentFixture<AnnexureAViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnexureAViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnexureAViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
