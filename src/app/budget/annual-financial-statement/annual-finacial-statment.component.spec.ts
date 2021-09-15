import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualFinacialStatmentComponent } from './annual-finacial-statment.component';

describe('AnnualFinacialStatmentComponent', () => {
  let component: AnnualFinacialStatmentComponent;
  let fixture: ComponentFixture<AnnualFinacialStatmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnualFinacialStatmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualFinacialStatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
