import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockCpinHaListingComponent } from './block-cpin-ha-listing.component';

describe('BlockCpinHaListingComponent', () => {
  let component: BlockCpinHaListingComponent;
  let fixture: ComponentFixture<BlockCpinHaListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockCpinHaListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockCpinHaListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
