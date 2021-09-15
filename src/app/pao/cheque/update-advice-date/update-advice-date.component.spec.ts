import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAdviceDateComponent } from './update-advice-date.component';

describe('UpdateAdviceDateComponent', () => {
  let component: UpdateAdviceDateComponent;
  let fixture: ComponentFixture<UpdateAdviceDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAdviceDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAdviceDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
