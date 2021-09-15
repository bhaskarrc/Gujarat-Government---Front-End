import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockCpinHaComponent } from './block-cpin-ha.component';

describe('BlockCpinHaComponent', () => {
  let component: BlockCpinHaComponent;
  let fixture: ComponentFixture<BlockCpinHaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockCpinHaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockCpinHaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
