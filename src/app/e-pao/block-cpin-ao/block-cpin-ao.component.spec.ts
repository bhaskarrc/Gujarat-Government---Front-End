import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockCpinAoComponent } from './block-cpin-ao.component';

describe('BlockCpinAoComponent', () => {
  let component: BlockCpinAoComponent;
  let fixture: ComponentFixture<BlockCpinAoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockCpinAoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockCpinAoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
