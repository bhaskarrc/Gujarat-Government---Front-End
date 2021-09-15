import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockCpinViewComponent } from './block-cpin-view.component';

describe('BlockCpinViewComponent', () => {
  let component: BlockCpinViewComponent;
  let fixture: ComponentFixture<BlockCpinViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockCpinViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockCpinViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
