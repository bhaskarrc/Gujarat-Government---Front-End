import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantFromControllingOfficerComponent } from './grant-from-controlling-officer.component';

describe('GrantFromControllingOfficerComponent', () => {
  let component: GrantFromControllingOfficerComponent;
  let fixture: ComponentFixture<GrantFromControllingOfficerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantFromControllingOfficerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantFromControllingOfficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
