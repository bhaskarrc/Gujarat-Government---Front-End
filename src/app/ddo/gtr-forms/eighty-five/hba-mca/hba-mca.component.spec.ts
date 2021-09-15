import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HbaMcaComponent } from './hba-mca.component';

describe('HbaMcaComponent', () => {
  let component: HbaMcaComponent;
  let fixture: ComponentFixture<HbaMcaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HbaMcaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HbaMcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
