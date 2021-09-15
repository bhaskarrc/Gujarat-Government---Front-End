import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeputyDirectorLevelComponent } from './deputy-director-level.component';

describe('DeputyDirectorLevelComponent', () => {
  let component: DeputyDirectorLevelComponent;
  let fixture: ComponentFixture<DeputyDirectorLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeputyDirectorLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeputyDirectorLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
