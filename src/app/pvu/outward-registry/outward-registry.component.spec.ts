import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutwardRegistryComponent } from './outward-registry.component';

describe('OutwardRegistryComponent', () => {
  let component: OutwardRegistryComponent;
  let fixture: ComponentFixture<OutwardRegistryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutwardRegistryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutwardRegistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
