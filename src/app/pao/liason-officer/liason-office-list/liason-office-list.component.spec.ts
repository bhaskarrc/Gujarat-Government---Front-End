import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiasonOfficeListComponent } from './liason-office-list.component';

describe('LiasonOfficeListComponent', () => {
  let component: LiasonOfficeListComponent;
  let fixture: ComponentFixture<LiasonOfficeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiasonOfficeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiasonOfficeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
