import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMlaListComponent } from './new-mla-list.component';

describe('NewMlaListComponent', () => {
  let component: NewMlaListComponent;
  let fixture: ComponentFixture<NewMlaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMlaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMlaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
