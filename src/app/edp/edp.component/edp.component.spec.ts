import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdpComponent } from './edp.component';

describe('EdpComponent', () => {
  let component: EdpComponent;
  let fixture: ComponentFixture<EdpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
