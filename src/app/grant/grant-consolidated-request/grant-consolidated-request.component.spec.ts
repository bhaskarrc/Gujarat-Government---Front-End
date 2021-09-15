import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantConsolidatedRequestComponent } from './grant-consolidated-request.component';

describe('GrantConsolidatedRequestComponent', () => {
  let component: GrantConsolidatedRequestComponent;
  let fixture: ComponentFixture<GrantConsolidatedRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantConsolidatedRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantConsolidatedRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
