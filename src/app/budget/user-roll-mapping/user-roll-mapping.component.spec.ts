import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRollMappingComponent } from './user-roll-mapping.component';

describe('UserRollMappingComponent', () => {
  let component: UserRollMappingComponent;
  let fixture: ComponentFixture<UserRollMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRollMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRollMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
