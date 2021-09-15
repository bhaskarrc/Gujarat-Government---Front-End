import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PvuRegistryRopComponent } from './pvu-registry-rop.component';

describe('PvuRegistryRopComponent', () => {
  let component: PvuRegistryRopComponent;
  let fixture: ComponentFixture<PvuRegistryRopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PvuRegistryRopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PvuRegistryRopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
