import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdviceGenerateListingComponent } from './advice-generate-listing.component';

describe('AdviceGenerateListingComponent', () => {
  let component: AdviceGenerateListingComponent;
  let fixture: ComponentFixture<AdviceGenerateListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdviceGenerateListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdviceGenerateListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
