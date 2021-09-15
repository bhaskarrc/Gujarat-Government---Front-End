import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantFromControllingOfficerListComponent } from './grant-from-controlling-officer-list.component';

describe('GrantFromControllingOfficerListComponent', () => {
  let component: GrantFromControllingOfficerListComponent;
  let fixture: ComponentFixture<GrantFromControllingOfficerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantFromControllingOfficerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantFromControllingOfficerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
