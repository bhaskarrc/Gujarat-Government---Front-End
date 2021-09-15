import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WireframeOfEstablishmentListComponent } from './wireframe-of-establishment-list.component';

describe('WireframeOfEstablishmentListComponent', () => {
  let component: WireframeOfEstablishmentListComponent;
  let fixture: ComponentFixture<WireframeOfEstablishmentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WireframeOfEstablishmentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WireframeOfEstablishmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
