import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePpoNumberComponent } from './update-ppo-number.component';

describe('UpdatePpoNumberComponent', () => {
  let component: UpdatePpoNumberComponent;
  let fixture: ComponentFixture<UpdatePpoNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePpoNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePpoNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
