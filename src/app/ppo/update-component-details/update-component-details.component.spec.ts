import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateComponentDetailsComponent } from './update-component-details.component';

describe('UpdateComponentDetailsComponent', () => {
  let component: UpdateComponentDetailsComponent;
  let fixture: ComponentFixture<UpdateComponentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateComponentDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateComponentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
