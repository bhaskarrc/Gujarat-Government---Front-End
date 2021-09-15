import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PvuRegistryComponent } from './pvu-registry.component';

describe('PvuRegistryComponent', () => {
  let component: PvuRegistryComponent;
  let fixture: ComponentFixture<PvuRegistryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PvuRegistryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PvuRegistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
