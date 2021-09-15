import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditorMappingComponent } from './auditor-mapping.component';

describe('AuditorMappingComponent', () => {
  let component: AuditorMappingComponent;
  let fixture: ComponentFixture<AuditorMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditorMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditorMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
