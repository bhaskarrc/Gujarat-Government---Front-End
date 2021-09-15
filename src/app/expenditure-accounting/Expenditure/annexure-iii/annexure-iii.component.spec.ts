import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnexureIIIComponent } from './annexure-iii.component';

describe('AnnexureIIIComponent', () => {
  let component: AnnexureIIIComponent;
  let fixture: ComponentFixture<AnnexureIIIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnexureIIIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnexureIIIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
