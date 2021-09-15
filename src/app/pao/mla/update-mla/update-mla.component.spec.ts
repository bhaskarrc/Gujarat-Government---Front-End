import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMlaComponent } from './update-mla.component';

describe('UpdateMlaComponent', () => {
  let component: UpdateMlaComponent;
  let fixture: ComponentFixture<UpdateMlaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateMlaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMlaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
