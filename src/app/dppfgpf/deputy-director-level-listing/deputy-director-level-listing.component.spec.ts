import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeputyDirectorLevelListingComponent } from './deputy-director-level-listing.component';

describe('DeputyDirectorLevelListingComponent', () => {
  let component: DeputyDirectorLevelListingComponent;
  let fixture: ComponentFixture<DeputyDirectorLevelListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeputyDirectorLevelListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeputyDirectorLevelListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
