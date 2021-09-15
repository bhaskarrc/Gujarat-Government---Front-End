import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantExemptionListComponent } from './grant-exemption-list.component';

describe('GrantExemptionListComponent', () => {
  let component: GrantExemptionListComponent;
  let fixture: ComponentFixture<GrantExemptionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantExemptionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantExemptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
