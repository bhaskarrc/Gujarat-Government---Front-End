import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparationOfChallanToListComponent } from './preparation-of-challan-to-list.component';

describe('PreparationOfChallanToListComponent', () => {
  let component: PreparationOfChallanToListComponent;
  let fixture: ComponentFixture<PreparationOfChallanToListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreparationOfChallanToListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreparationOfChallanToListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
