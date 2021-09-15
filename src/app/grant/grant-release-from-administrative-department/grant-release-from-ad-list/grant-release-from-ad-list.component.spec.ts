import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantReleaseFromAdListComponent } from './grant-release-from-ad-list.component';

describe('GrantReleaseFromAdListComponent', () => {
  let component: GrantReleaseFromAdListComponent;
  let fixture: ComponentFixture<GrantReleaseFromAdListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantReleaseFromAdListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantReleaseFromAdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
