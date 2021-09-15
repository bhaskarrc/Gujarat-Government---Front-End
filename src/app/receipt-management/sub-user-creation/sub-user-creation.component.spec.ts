import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubUserCreationComponent } from './sub-user-creation.component';

describe('SubUserCreationComponent', () => {
  let component: SubUserCreationComponent;
  let fixture: ComponentFixture<SubUserCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubUserCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubUserCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
