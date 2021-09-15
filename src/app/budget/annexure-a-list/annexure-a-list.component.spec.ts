import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnexureAListComponent } from './annexure-a-list.component';

describe('AnnexureAListComponent', () => {
  let component: AnnexureAListComponent;
  let fixture: ComponentFixture<AnnexureAListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnexureAListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnexureAListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
