import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockCpinAoLinkComponent } from './block-cpin-ao-link.component';

describe('BlockCpinAoLinkComponent', () => {
  let component: BlockCpinAoLinkComponent;
  let fixture: ComponentFixture<BlockCpinAoLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockCpinAoLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockCpinAoLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
