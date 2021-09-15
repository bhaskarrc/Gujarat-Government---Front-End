import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantExcessDemandDetailsComponent } from './grant-excess-demand-details.component';

describe('GrantExcessDemandDetailsComponent', () => {
  let component: GrantExcessDemandDetailsComponent;
  let fixture: ComponentFixture<GrantExcessDemandDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantExcessDemandDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantExcessDemandDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
