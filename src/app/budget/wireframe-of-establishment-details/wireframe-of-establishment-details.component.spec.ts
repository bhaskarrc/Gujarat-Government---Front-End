import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WireframeOfEstablishmentDetailsComponent } from './wireframe-of-establishment-details.component';

describe('WireframeOfEstablishmentDetailsComponent', () => {
  let component: WireframeOfEstablishmentDetailsComponent;
  let fixture: ComponentFixture<WireframeOfEstablishmentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WireframeOfEstablishmentDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WireframeOfEstablishmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
