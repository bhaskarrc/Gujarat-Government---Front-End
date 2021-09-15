import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockCpinAoListingComponent } from './block-cpin-ao-listing.component';

describe('BlockCpinAoListingComponent', () => {
  let component: BlockCpinAoListingComponent;
  let fixture: ComponentFixture<BlockCpinAoListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockCpinAoListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockCpinAoListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
